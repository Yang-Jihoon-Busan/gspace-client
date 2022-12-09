import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../components/Button';
import colors from '../../constants/appcolors';
import cstyles from '../../constants/cstyles';



const MobileAuth = ({}) => {
    return (
        <>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <TextInput
                    style={[cstyles.input, { marginRight: 10, flex: 1 }]}
                    placeholderTextColor={colors.textSecondary}
                    placeholder={'휴대폰번호 입력'}
                />
                <Button mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>인증요청</Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={[cstyles.input, { flex: 1 }]}
                    placeholderTextColor={colors.textSecondary}
                    placeholder={'인증번호 입력'}
                />
                <Button mode="outlined" style={{ height: 44, width: 90 }} textStyle={{ fontSize: 15 }}>확인</Button>
            </View>
        </>
    );
}

export default MobileAuth;