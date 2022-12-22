import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { RoleModule } from './v1/roles/role.module';
import { TestsModule } from './v1/tests/tests.module';
import { UsersModule } from './v1/users/users.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [
      { path: '/users', module: UsersModule },
      { path: '/roles', module: RoleModule },
      { path: '/test', module: TestsModule },
    ],
  },
];
@Module({
  imports: [RouterModule.register(routes), UsersModule, TestsModule],
})
export class V1Module {}
