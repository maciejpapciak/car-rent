import { api } from '@/lib/api'
import { UserModel } from './userApi.model'
import { queryOptions } from '@tanstack/react-query'

export const getUserList = () =>
  api.get<UserModel[]>('/User').then(({ data }) => data)

export const getUser = (id: number) =>
  api.get<UserModel>(`/User/${id}`).then(({ data }) => data)

export const getUserSelectQueryOptions = queryOptions({
  queryKey: ['users', 'select'],
  queryFn: getUserList,
  select: (data) =>
    data.map((user) => ({
      description: `${user.firstName} ${user.lastName}`,
      value: String(user.id)
    }))
})
