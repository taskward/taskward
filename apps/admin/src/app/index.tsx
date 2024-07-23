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
