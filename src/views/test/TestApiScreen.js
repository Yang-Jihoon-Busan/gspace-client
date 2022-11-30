import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { AppContext } from '../../contexts/app-context';
import { AuthContext } from '../../contexts/auth-context';
import env from '../../constants/env';
const qs = require('qs');


const TestApiScreen = () => {
    const { apifetch, simplefetch, dbLog, showSnackbar, openImagePicker } = useContext(AppContext);
    const { me, setAuthInfo, fetchMyinfo, clearAuthInfo } = useContext(AuthContext);

    const handleGetApi = () => {
        apifetch(`${env.baseURL}/api/test/basic_test_get.php`)
        .then((data) => {
            console.log(data);
        })
    }

    const handlePostApi = () => {
        const body = qs.stringify({ 'foo': 'FOO' });
        const options = {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        apifetch(`${env.baseURL}/api/test/basic_test_post.php`, options)
        .then((data) => {
            console.log(data);
        })
    }

    const handleErrorApi = () => {
        // apifetch(`${env.baseURL}/api/test/error_01.php`)
        // .catch(console.error);

        simplefetch('get', '/test/error_01.php')
        .catch((error) => {
            console.error(error)
        })
    }

    const handleNullApi = () => {
        apifetch(`${env.baseURL}/api/test/error_03.php`)
        .catch(console.error);
    }

    const handleImageUpload = async () => {
        openImagePicker(1, assets => {
            if (assets.length === 0) return;

            const data = new FormData();
            data.append('foo', 'FOO');
            data.append('image', {
                name: assets[0].fileName,
                type: assets[0].type,
                uri: assets[0].uri,
            });
            
            const options = {
                method: 'post',
                body: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };
    
            apifetch(`${env.baseURL}/api/test/upload_image.php`, options)
            .then(data => {
                console.log(data);
                showSnackbar('업로드했습니다.');
            })
        })
    }
    
    const handleDbLog = () => {
        const data = {
            division: 'info',
            code: 'info01',
            message: 'hi',
        };
        dbLog(data);
    }

    const handleLogin = () => {
        const params = {
            email: 'yangji24@nate.com',
            password: '1234qwer',
        }
        simplefetch('get', '/auth/password_signin.php', { params })
        .then((authinfo) => {
            setAuthInfo(authinfo);
        })
    }

    const handleMyinfo = () => {
        fetchMyinfo()
    }

    const handleLogout = () => {
        clearAuthInfo();
    }

    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
            <View style={styles.section}><Button onPress={handleGetApi}>api: get</Button></View>
            <View style={styles.section}><Button onPress={handlePostApi}>api: post</Button></View>
            <View style={styles.section}><Button onPress={handleErrorApi}>api: error</Button></View>
            <View style={styles.section}><Button onPress={handleNullApi}>api: null</Button></View>
            <View style={styles.section}><Button onPress={handleImageUpload}>api: upload image</Button></View>
            <View style={styles.section}><Button onPress={handleDbLog}>api: db log</Button></View>
            <View style={styles.section}><Button onPress={handleLogin}>login</Button></View>
            <View style={styles.section}><Button onPress={handleMyinfo}>myinfo</Button></View>
            {me && <Text>{me.id}</Text>}
            <View style={styles.section}><Button onPress={handleLogout}>logout</Button></View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    section: { marginTop: 8 },
});

export default TestApiScreen;