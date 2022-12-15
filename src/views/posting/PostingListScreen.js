import React, { useState, useMemo } from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '../../components/Text';
import colors from '../../constants/appcolors';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Nodata from '../../components/Nodata';
import useSearchPosting from '../../api/posting/useSearchPosting';


// 공지사항, 이벤트 같이 사용하는 스크린
const PostingListScreen = ({ route, navigation }) => {
    const category = useMemo(() => {
        return route.params?.category;
    }, [ route.params ]);

    const [ trigger, setTrigger ] = useState();
    const [ page, setPage ] = useState(1);

    const { loading, fetched, rows } = useSearchPosting(page, setPage, category, trigger);

    const onEndReacehd = () => {
        setPage(page => page + 1);
    }

    const handleRefresh = () => {
        setTrigger(new Date().getTime());
    }

    const renderItem = ({ item }) => (<TouchableWithoutFeedback onPress={() => { navigation.navigate('PostingDetail', { id: item.id }) }}>
        <View style={{ paddingVertical: 20, borderColor: colors.borderColor, borderBottomWidth: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, marginRight: 5, flex: 1 }} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Image />
            </View>
            <Text style={{ color: colors.textSecondary, marginTop: 10 }}>{item.created_at}</Text>
        </View>
    </TouchableWithoutFeedback>);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }} edges={['top', 'right', 'left']}>
            <StatusBar />
            <Header title={category === 'notice' ? '공지사항' : '이벤트'} useHome={false} />

            <View style={{ marginTop: 30, marginHorizontal: 20, borderColor: 'white', borderBottomWidth: 2 }}></View>

            <FlatList
                style={{ marginHorizontal: 20 }}
                data={rows}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.2}
                onEndReached={onEndReacehd}
                onRefresh={handleRefresh}
                refreshing={false}
                ListEmptyComponent={fetched && <Nodata style={{ paddingLeft: 20 }}>{category === 'notice' ? '공지사항이 없습니다.' : '이벤트가 없습니다.' }</Nodata>}
                ListFooterComponent={loading && <Loading />}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
});

export default PostingListScreen;