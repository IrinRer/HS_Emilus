import React, { useState } from "react";
import { Card, Table, Tooltip, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { deleteUserAction } from "redux/actions/Users";
import Loading from "components/shared-components/Loading";

export const ListClients = () => {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  if (!loading) {
    return <Loading />;
  }

  const deleteUser = (userId) => {
    dispatch(deleteUserAction(userId));
  };

  const showUserProfile = (userInfo) => {
    setSelectedUser(userInfo);
    setUserProfileVisible(true);
  };

  const closeUserProfile = () => {
    setSelectedUser(null);
    setUserProfileVisible(false);
  };

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: {
        compare: (a, b) => a.phone.length - b.phone.length,
      },
    },
    {
      title: "Website",
      dataIndex: "website",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showUserProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Table columns={tableColumns} dataSource={users} rowKey="id" />
      {selectedUser ? (
        <UserView
          user={selectedUser}
          visible={userProfileVisible}
          close={() => {
            closeUserProfile();
          }}
        />
      ) : (
        false
      )}
    </Card>
  );
};

export default ListClients;
