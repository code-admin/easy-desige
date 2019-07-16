<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}

.layout-footer-center {
    text-align: center;
}

/* .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
        top: 0;
    }
} */
</style>
<template>
<div class="layout">
    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" active-name="1" @on-select='handMenu'>
                <div class="layout-logo">

                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    首页
                    </MenuItem>
                    <MenuItem name="2">
                    <Icon type="ios-folder"></Icon>
                    项目
                    </MenuItem>
                    <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    关于
                    </MenuItem>
                    <MenuItem name="4">
                    <Icon type="md-person"></Icon>
                    注册 / 登录
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: 'calc(100vh - 159px)'}">
            <router-view />
        </Content>
        <Footer class="layout-footer-center">By: &copy;zhuojun 苏ICP备18031899号</Footer>
    </Layout>

    <!-- 登录框 -->
    <Modal class="vertical-center-modal" v-model="showLogin" title="登录/注册" @on-ok="showLogin=false" @on-cancel="showLogin=false">
        <Form ref="login" :model="login" :label-width="80">
            <FormItem label="账号:" prop="userName">
                <Input v-model="login.userName" placeholder="手机号/邮箱/账号" />
            </FormItem>
            <FormItem label="密码:" prop="password">
                <Input v-model="login.password" type="password" placeholder="密码必须6位以上字母或数字" />
            </FormItem>
        </Form>
    </Modal>

</div>
</template>

<script>
export default {
    data() {
        return {
            showLogin: false,
            login: {
                userName: '',
                password: '',
                phoneNumber: ''
            },
            ruleValidate: [{}]
        }
    },
    methods: {
        handMenu(m) {
            if (m === '4') {
                this.showLogin = !this.showLogin;
            }
        }
    }
}
</script>
