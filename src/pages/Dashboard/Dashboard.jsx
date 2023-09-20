import { useContext, useState } from "react";
import { Typography } from "@mui/material";

import * as Styled from "./Dashboard.styles";
import { UserContext, ArticleContext } from "../../contexts";
import { getColumns, MODAL_TYPES } from "./utils";
import { Button, Menu, Modal, TextInput } from "../../components";

export const Dashboard = () => {
  const user = useContext(UserContext);
  const article = useContext(ArticleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [selectedRow, setSelectedRow] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formData = { title, description };
  const isCreateDisabled = !title.trim().length || !description.trim().length;
  const formattedDate = new Date(selectedRow?.createdAt).toLocaleDateString(undefined, {
    timeZone: "America/Toronto",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const menuItems = [
    {
      label: "Edit",
      onClick: () => {
        setModalType(MODAL_TYPES.EDIT);
        setIsMenuOpen(false);
        setTitle(selectedRow.title);
        setDescription(selectedRow.description);
      },
    },
    {
      label: "Delete",
      onClick: () => {
        setModalType(MODAL_TYPES.DELETE);
        setIsMenuOpen(false);
      },
    },
  ];

  const columns = getColumns({
    onMenuClick: (event, row) => {
      event.stopPropagation();
      setAnchorEl(event.currentTarget);
      setIsMenuOpen(true);
      setSelectedRow(row);
    },
    userId: user.currentUser,
  });

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setSelectedRow({});
  };

  const handleModalClose = () => {
    setModalType(null);
  };

  const handleDelete = () => {
    article.deleteArticle(selectedRow.id);
    handleModalClose();
  };

  const handleCreate = () => {
    article.createArticle(formData);
    handleModalClose();
    resetForm();
  };

  const handleEdit = () => {
    article.editArticle({ ...selectedRow, ...formData });
    handleModalClose();
    resetForm();
  };

  const handleRowClick = (grid) => {
    setSelectedRow(grid.row);
    setModalType(MODAL_TYPES.READ);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Wrapper>
          <Styled.Button variant="text" color="secondary" onClick={user.logout}>
            Logout
          </Styled.Button>
        </Styled.Wrapper>
      </Styled.Header>
      <Styled.Wrapper>
        <Typography variant="h2" color="secondary">
          Articles
        </Typography>
        <Styled.Wrapper>
          <Styled.Button color="secondary" onClick={() => setModalType(MODAL_TYPES.CREATE)}>
            + Entry
          </Styled.Button>
        </Styled.Wrapper>
      </Styled.Wrapper>

      <Styled.Grid rows={article.articles} columns={columns} onRowClick={handleRowClick} />

      <Menu items={menuItems} open={isMenuOpen} onClose={handleMenuClose} anchorEl={anchorEl} />

      <Modal open={modalType === MODAL_TYPES.READ} onClose={handleModalClose}>
        <Typography variant="h6" style={{ marginBottom: "16px" }}>
          {selectedRow.title}
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: "16px" }}>
          by: {selectedRow.user}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "16px" }}>
          {selectedRow.description}
        </Typography>
        <Typography variant="caption " style={{ marginBottom: "16px" }}>
          {formattedDate}
        </Typography>
        <Button variant="text" onClick={handleModalClose}>
          close
        </Button>
      </Modal>

      <Modal open={modalType === MODAL_TYPES.CREATE} onClose={handleModalClose}>
        <Typography variant="h6" style={{ marginBottom: "16px" }}>
          Create
        </Typography>
        <TextInput label="Title" style={{ marginBottom: "16px" }} onChange={(e) => setTitle(e.target.value)} />
        <TextInput
          label="Description"
          style={{ marginBottom: "16px" }}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          minRows={4}
          maxRows={10}
        />
        <Button style={{ marginBottom: "16px" }} onClick={handleCreate} disabled={isCreateDisabled}>
          save
        </Button>
        <Button variant="text" onClick={handleModalClose}>
          cancel
        </Button>
      </Modal>

      <Modal open={modalType === MODAL_TYPES.EDIT} onClose={handleModalClose}>
        <Typography variant="h6" style={{ marginBottom: "16px" }}>
          Edit
        </Typography>
        <TextInput
          label="Title"
          style={{ marginBottom: "16px" }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextInput
          label="Description"
          style={{ marginBottom: "16px" }}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          minRows={4}
          maxRows={10}
          value={description}
        />
        <Button style={{ marginBottom: "16px" }} disabled={isCreateDisabled} onClick={handleEdit}>
          save
        </Button>
        <Button variant="text" onClick={handleModalClose}>
          cancel
        </Button>
      </Modal>

      <Modal open={modalType === MODAL_TYPES.DELETE} onClose={handleModalClose}>
        <Typography variant="subtitle1" style={{ marginBottom: "16px" }}>
          Are you sure you want to delete the article?
        </Typography>
        <Button style={{ marginBottom: "16px" }} onClick={handleDelete}>
          delete
        </Button>
        <Button variant="text" onClick={handleModalClose}>
          cancel
        </Button>
      </Modal>
    </Styled.Container>
  );
};
