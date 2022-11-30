exports.mobile_pipe = (number) => {
    if (number?.length !== 11) return number;
    return `${number.substring(0,3)}-${number.substring(3,7)}-${number.substring(7,11)}`;
}

exports.number_format_pipe = (x) => {
    if (!x) return x;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.address_pipe = (address) => {
    if (address) {
        const zipcodeSpan = address.zipcode ? "[" + address.zipcode + "] " : "";
        return `${zipcodeSpan}${address.address} ${address.address_detail}`;
    }
    return '-';
}

exports.age_pipe = (birthyear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthyear + 1;
    return age;
}

exports.birthyear_pipe = (age) => {
    const currentYear = new Date().getFullYear();
    const birthyear = currentYear - age + 1;
    return birthyear;
}

exports.user_account_pipe = (user) => {
    return user.account_bank && user.account_number && `${user.account_bank} ${user.account_number}` || '';
}


exports.get_image_height = (width, height, maxWidth) => {
    const rWidth = Math.min(+width, maxWidth);
    return rWidth / +width * +height;
}