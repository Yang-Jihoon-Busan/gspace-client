import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../components/Button';
import ErrorText from '../../components/ErrorText';
import { basicErrorHandler } from '../../config/http-error-handler';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';
import { AppContext } from '../../contexts/app-context';
import useInterval from '../../hooks/useInterval';


const MobileAuth = ({ callback, setError }) => {
    const { simplefetch } = useContext(AppContext);

    const [ state, setState ] = useState('ready');  // ready, sended, authenticated 
    const [ id, setId ] = useState();
    const [ codeInput, setCodeInput ] = useState('');
    const [ remainTime, setRemainTime ] = useState(0);
    const [ mobile, setMobile ] = useState('');

    const fetchAuthenticationCode = () => {
        if (id) return;
        if (!mobile || mobile.length > 14) return setError('올바른 핸드폰번호를 입력하세요.');

        const body = { mobile };

        simplefetch('post', '/auth/generate_auth_code_bymobile.php', { body })
        .then((data) => {
            setId(data.id);
            setState('sended');
        })
        .catch(basicErrorHandler);
    }

    const confirmCode = () => {
        if (!id) return;
        if (remainTime <= 0) return setError('제한시간이 초과되었습니다.');

        const body = { id, code: codeInput };
        simplefetch('post', '/auth/verify_auth_code.php', { body })
        .then(({ is_authenticated }) => {
            if (is_authenticated) {
                setState('authenticated');
            }
            else setError('인증번호를 잘못 입력하셨습니다.');
        })
        .catch(basicErrorHandler);
    }

    useEffect(() => {
        if (state === 'sended') {
            setCodeInput('');
            setRemainTime(180);
            setError(null);
            codeRef.current?.focus();
        }
        else if (state === 'authenticated') {
            setId(null);
            setError(null);
            setRemainTime(0);
            setCodeInput('');
            callback({ id, mobile });
        }
    }, [state]);

    useInterval(() => {
        if (remainTime > -1) {
            if (remainTime === 0) {
                return setId(null);
            }
            setRemainTime(time => time - 1);
        }
    }, 1000);

    const remainTimeText = useMemo(() => {
        if (remainTime <= 0) return '';
        let minutes = Math.floor(remainTime / 60) + '';
        let seconds = remainTime % 60 + '';
        if (minutes.length === 1) minutes = '0' + minutes;
        if (seconds.length === 1) seconds = '0' + seconds;
        return `${minutes}:${seconds}`;
    }, [ remainTime ]);

    const codeRef = useRef();

    return (
        <>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <TextInput
                    style={[cstyles.input, { marginRight: 10, flex: 1 }]}
                    placeholderTextColor={colors.textSecondary}
                    placeholder={'휴대폰번호 입력'}
                    textContentType={'telephoneNumber'}
                    keyboardType="phone-pad"
                    returnKeyType="send"
                    editable={state === 'ready'}
                    onSubmitEditing={fetchAuthenticationCode}
                    onChangeText={setMobile}
                    value={mobile}
                />
                <Button onPress={fetchAuthenticationCode} mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>인증요청</Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={[cstyles.input, { marginRight: 10, flexDirection: 'row', flex: 1 }]}>
                    <TextInput
                        ref={codeRef}
                        style={[{ flex: 1, color: colors.textPrimary }]}
                        placeholderTextColor={colors.textSecondary}
                        placeholder={'인증번호 입력'}
                        keyboardType="number-pad"
                        returnKeyType="send"
                        editable={state === 'sended'}
                        onSubmitEditing={confirmCode}
                        onChangeText={setCodeInput}
                        value={codeInput}
                    />
                    <ErrorText style={{ alignSelf: 'flex-end', marginBottom: 8 }} error={remainTimeText} />
                </View>
                
                <Button onPress={confirmCode} mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>확인</Button>
            </View>
        </>
    );
}

export default MobileAuth;