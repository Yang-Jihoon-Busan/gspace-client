import React, { useState, useEffect, useContext, useMemo } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import { AppContext } from '../../contexts/app-context';
import { basicErrorHandler } from '../../config/http-error-handler';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import HorizontalLine from '../../components/HorizontalLine';
import Loading from '../../components/Loading';
import moment from 'moment';
import AppImage from '../../components/AppImage';


// 이벤트 또는 공지사항
const PostingDetailScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const id = useMemo(() => {
        return route.params?.id;
    }, [ route.params ]);

    const [ posting, setPosting ] = useState();
    useEffect(() => {
        const params = { id };
        simplefetch('get', '/posting/get_posting.php', { params })
        .then(setPosting)
        .catch(basicErrorHandler);
    }, [ id ]);

    const dimensions = useWindowDimensions();
    const imageMaxWidth = useMemo(() => { return dimensions.width - 40 }, [ dimensions ]);

    if (!posting) return (<Loading />);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={posting.category === 'notice' ? '공지사항' : '이벤트'} useHome={false} />

            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20, paddingBottom: 50 }}>
                {posting.fileinfo && <AppImage style={{ marginBottom: 20 }} source={{ uri: posting.fileinfo.download_url }} fileinfo={posting.fileinfo} maxWidth={imageMaxWidth} />}
                <Text style={{ fontSize: 13, color: colors.textSecondary, marginBottom: 10 }}>{moment(posting.created_at).format('Y.M.D')}</Text>
                <Text style={{ fontSize: 18 }}>{posting.title}</Text>

                <HorizontalLine style={{ marginVertical: 20 }} />
                <Text style={{ color: colors.textSecondary }}>{posting.content}</Text>
                <HorizontalLine style={{ marginVertical: 20 }} />

            </ScrollView>
        </SafeAreaView>
    );
}

export default PostingDetailScreen;