import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailBuilder from './pages/EmailBuilderPage'
import { ConfigProvider, Space } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <Space>
        <EmailBuilder />
      </Space>
    </ConfigProvider>
  )
}

export default App
