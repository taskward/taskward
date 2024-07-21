import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useResponsive } from 'ahooks'

import { ActiveUsersChart, UserGrowthChart } from '@/features/dashboard'

export const Route = createLazyFileRoute('/_base/')({
  component: Page
})

function Page() {
  const responsive = useResponsive()

  const quartSpan = useMemo(() => (responsive.sm ? 6 : 24), [responsive.sm])
  const halfSpan = useMemo(() => (responsive.sm ? 12 : 24), [responsive.sm])

  return (
    <PageContainer>
      <Row gutter={[12, 12]}>
        <Col span={quartSpan}>
          <Card>
            <div className="h-40">Card5</div>
          </Card>
        </Col>
        <Col span={quartSpan}>
          <Card>
            <div className="h-40">
              <Link to="/dev/charts">
                <Button>Chart Demo</Button>
              </Link>
            </div>
          </Card>
        </Col>
        <Col span={quartSpan}>
          <Card>
            <div className="h-40">Card5</div>
          </Card>
        </Col>
        <Col span={quartSpan}>
          <Card>
            <div className="h-40">Card5</div>
          </Card>
        </Col>

        <Col span={halfSpan}>
          <Card>
            <UserGrowthChart />
          </Card>
        </Col>
        <Col span={halfSpan}>
          <Card>
            <ActiveUsersChart />
          </Card>
        </Col>

        <Col span={halfSpan}>
          <Card>
            <div className="h-80">Card5</div>
            {/* <UserDistributionChart /> */}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  )
}
