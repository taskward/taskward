import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import type { ColDef } from '@ag-grid-community/core'
import { AgGridReact, type CustomCellRendererProps } from '@ag-grid-community/react'
import { useSuspenseQuery } from '@tanstack/react-query'

import type { UserVo } from '@/features/users'
import { usersQO } from '@/features/users'

export default function BasicTable() {
  const themeStore = useThemeStore()

  const {
    data: { records }
  } = useSuspenseQuery(usersQO())

  const colDefs = useMemo<ColDef<UserVo>[]>(
    () => [
      { field: 'id', headerName: 'ID', width: 100, lockPosition: 'left' },
      {
        field: 'avatarUrl',
        headerName: 'Avatar Url',
        lockPosition: 'left',
        cellRenderer: (params: CustomCellRendererProps) => <Avatar src={params.value} />
      },
      { field: 'username', headerName: 'Username', lockPosition: 'left' },
      { field: 'nickName', headerName: 'Nick Name' },
      { field: 'firstName', headerName: 'First Name' },
      { field: 'middleName', headerName: 'Middle Name' },
      { field: 'lastName', headerName: 'Last Name' },
      { field: 'fullName', headerName: 'Full Name' },
      { field: 'email', headerName: 'Email' },
      { field: 'birthDate', headerName: 'Birth Date' }
    ],
    []
  )

  return (
    <div
      className={clsx(
        'h-screen',
        themeStore.isLightTheme() ? 'ag-theme-quartz' : 'ag-theme-quartz-dark'
      )}
    >
      <AgGridReact
        rowData={records}
        columnDefs={colDefs}
        getRowId={(params) => params.data.id.toString()}
        modules={[ClientSideRowModelModule]}
      />
    </div>
  )
}
