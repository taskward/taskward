import { appConfig } from '@taskward/config'

/**
 * Dynamic change document title.
 */
export const useTitle = () => {
  const routeMeta = useRouteStaticData()

  useEffect(() => {
    const { title } = routeMeta
    document.title = title ? `${title} | ${appConfig.APP_NAME}` : appConfig.APP_NAME
  }, [routeMeta])
}
