import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import { AppContext } from '../../contexts/app-context';
import { basicErrorHandler } from '../../config/http-error-handler';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Pill from '../../components/Pill';
import HorizontalLine from '../../components/HorizontalLine';
import UnderlineButton from '../../components/UnderlineButton';
import Loading from '../../components/Loading';
import moment from 'moment';
import AppImage from '../../components/AppImage';


const InquiryDetailScreen = ({ route, navigation }) => {
    const { simplefetch, showSnackbar, showDialog } = useContext(AppContext);

    const id = useMemo(() => {
        return route.params?.id;
    }, [ route.params ]);

    const [row, setRow] = useState();
    useEffect(() => {
        const params = { id };
        simplefetch('get', '/inquiry/get_inquiry.php', { params })
        .then(setRow)
        .catch(basicErrorHandler);
    }, [ id ]);

    const handleRemove = () => {
        const dialogData = {
            message: '정말 삭제하시겠습니까?',
            first: {
                text: '삭제하기',
                onPress: () => {
                    const body = { id };
                    simplefetch('post', '/inquiry/remove_inquiry.php', { body })
                    .then(() => {
                        showSnackbar('삭제했습니다.');
                        navigation.navigate('MyInquiry', { 'need_refresh': true });
                    })
                    .catch(basicErrorHandler);            
                }
            },
        };
        showDialog(dialogData);
    }

    const dimensions = useWindowDimensions();
    const imageMaxWidth = useMemo(() => { return dimensions.width - 40 }, [ dimensions ]);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'문의상세'} useHome={false} />

            {row ? <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={ {fontSize: 13, color: colors.textSecondary }}>{moment(row.created_at).format('Y.M.D')}</Text>
                    <Pill mode={row.state === 'replied' ? 'contained' : 'outlined'} label={row.state === 'replied' ? '답변' : '미답변'} />
                </View>
                <Text style={{ fontSize: 18 }}>{row.title}</Text>

                <HorizontalLine style={{ marginVertical: 20 }} />

                <Text style={{ marginBottom: 20 }}>{row.content}</Text>
                
                {row.fileinfos.map(fileinfo => <AppImage style={{ marginBottom: 20 }} source={{ uri: fileinfo.download_url }} fileinfo={fileinfo} maxWidth={imageMaxWidth} />)}

                <HorizontalLine style={{ marginBottom: 20 }} />

                {row.state === 'replied' && <View style={{ marginBottom: 30, backgroundColor: colors.card, paddingHorizontal: 24, paddingVertical: 20 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>G SPACE 고객센터</Text>
                        <Text style={{ color: colors.textSecondary }}>{moment(row.replied_at).format('Y.M.D')}</Text>
                    </View>
                    <Text style={{ marginTop: 20 }}>{row.reply}</Text>
                </View>}

                <Button onPress={handleRemove}>삭제</Button>
                <UnderlineButton onPress={() => { navigation.goBack(); }} style={{ alignSelf: 'center', marginTop: 20 }}>목록보기</UnderlineButton>
            </ScrollView> : <Loading />}
        </SafeAreaView>
    );
}


export default InquiryDetailScreen;