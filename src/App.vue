<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Promise from 'es6-promise';
import CommonServices from 'service/common';

export default {
    name: 'app',

    beforeCreate () {
        Promise.all([CommonServices.getDict(), CommonServices.getPermission({
            res_category: 'APPCLIENT'
        })]).then(res => {
            console.group('字典与权限');
            if (res[0].code === 0) {
                window.dict = res[0].obj;
                console.log('字典：', window.dict);
            }

            if (res[1].code === 0) {
                window.auth = res[1].obj;
                console.log('权限：', window.auth);
            }
            console.groupEnd();
        });
    },
};
</script>

<style>
.app {
    width: 100%;
    height: 100%;
}
</style>