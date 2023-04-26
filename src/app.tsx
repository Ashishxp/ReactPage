import { Button, ConfigProvider, theme } from 'antd';

import { StyleProvider } from '@ant-design/cssinjs';
import zhCN from 'antd/locale/zh_CN';

import $styles from './app.module.css';

const App = () => {
    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#00B96B',
                },
                components: {
                    Layout: {
                        colorBgBody: '',
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">
                <div className={$styles.app}>
                    <div className={$styles.container}>
                     The firt ReactPage demo  with tailwind </span>
                      
                </div>
            </StyleProvider>
        </ConfigProvider>
    );
};

export default App;
