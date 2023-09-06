import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { Form } from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import { selectModal } from "../../redux/selectors";

export const Catalog = () => {
  const openModal = useSelector(selectModal);
  return (
    <>
      <Card />
      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </>
  );
};
