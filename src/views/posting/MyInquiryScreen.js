import React, { useState, useEffect, useContext, Fragment } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import { AppContext } from '../../contexts/app-context';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Pill from '../../components/Pill';
import Loading from '../../components/Loading';
import moment from 'moment';


const MyInquiryScreen = ({ route, navigation }) => {
    const { simplefetch } = useContext(AppContext);

    const [ rows, setRows ] = useState();
    const [ trigger, setTrigger ] = useState();
    useEffect(() => {
        simplefetch('get', '/inquiry/get_my_inquiries.php')
        .then(setRows);
    }, [ trigger ]);

    useEffect(() => {
        if (route.params?.need_refresh) setTrigger(new Date().getTime());
    }, [ route.params ]);

    const Item = (inquiry) => (
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('InquiryDetail', { id: inquiry.id }); }}>
            <View style={{ paddingVertical: 20, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 18 }} numberOfLines={1} ellipsizeMode='tail'>{inquiry.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={{ color: colors.textSecondary }}>{moment(inquiry.created_at).format('Y.M.D')}</Text>
                    <Pill mode={inquiry.state === 'replied' ? 'contained' : 'outlined'} label={inquiry.state === 'replied' ? '답변' : '미답변'} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={'1:1문의'} useHome={false} />

            <View style={{ marginTop: 30, marginHorizontal: 20, borderColor: 'white', borderBottomWidth: 2 }}></View>

            {rows ? <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                {rows.map(row => <Fragment key={row.id}>
                    {Item(row)}
                </Fragment>)}

                <View style={{ flex: 1, paddingTop: 30, paddingBottom: 50 }}>
                    <Button onPress={() => { navigation.navigate('InquiryForm'); }}>문의하기</Button>
                </View>
            </ScrollView> : <Loading />}
        </SafeAreaView>
    );
}

export default MyInquiryScreen;