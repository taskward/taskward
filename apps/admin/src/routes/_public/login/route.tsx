const searchSchema = z.object({
  redirect: z.string().optional()
})

export const Route = createFileRoute('/_public/login')({
  staticData: {
    title: '登录'
  },
  validateSearch: searchSchema
})
