<template>
    <div
        class="login-auth"
        v-loading.fullscreen.lock="loading"
        i-loading-text="初始化中....">
    </div>
</template>

<script>
import CommonService from 'service/common.js';

export default {
    name: 'auth',

    data () {
        return {
            loading: true
        };
    },

    mounted () {
        var params = {
            res_category: 'APPCLIENT',
            token: this.$route.params.token || ''
        };
        sessionStorage.setItem('token', token);

        CommonServices.authLogin(params).then(res => {
            let self = this;

            if (res.code === 0) {
                this.$message({
                    type: 'success',
                    message: '登录成功'
                });
                sessionStorage.setItem('userInfo', JSON.stringify(res.obj));

                this.$router.push('/system/dashboard');
            } else {
                this.$message.error('登录失败！');
            }
        });
    }
};
</script>
