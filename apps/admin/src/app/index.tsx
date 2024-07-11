import { RouterProvider } from '@tanstack/react-router'

export default function App() {
  return (
    <QueryProvider>
      <AntdProvider>
        <AxiosProvider>
          <RouterProvider router={router} />
        </AxiosProvider>
      </AntdProvider>
    </QueryProvider>
  )
}
