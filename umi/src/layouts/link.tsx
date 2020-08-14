import { Link } from 'umi';
import { IRouteComponentProps } from 'umi';
import React from 'react';

export default function LinkCom({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <>
      <div className="link-nav">
        {/* 点击跳转到指定 /about 路由 */}
        <Link to="/about" className="nav-link">
          About
        </Link>
        {/* 点击跳转到指定 /courses 路由，
          附带 query { sort: 'name' }*/}
        <Link to="/user?sort=name" className="nav-link">
          User
        </Link>
        {/* 点击跳转到指定 /list 路由，
          附带 query: { sort: 'name' }
          附带 hash: 'the-hash'
          附带 state: { fromDashboard: true }*/}
        <Link
          className="nav-link"
          to={{
            pathname: '/list',
            search: '?sort=name',
            hash: '#the-hash',
            state: { fromDashboard: true },
          }}
        >
          List
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        {/* 点击跳转到指定 /profile 路由，
      附带所有当前 location 上的参数
  */}
        <Link
          className="nav-link"
          to={(location) => {
            return { ...location, pathname: '/profile' };
          }}
        />
        {/* 点击跳转到指定 /courses 路由，
      但会替换当前 history stack 中的记录
  */}
        <Link className="nav-link" to="/courses" replace />
        {/*
      innerRef 允许你获取基础组件（这里应该就是 a 标签或者 null）
  */}
        <Link
          className="nav-link"
          to="/courses"
          innerRef={(node) => {
            // `node` refers to the mounted DOM element
            // or null when unmounted
          }}
        />
      </div>
      <div>{children}</div>
    </>
  );
}
