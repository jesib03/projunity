import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../redux/actions/actionsComment";
import Swal from "sweetalert2";

const CreateComments = ({ project, replyTo }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router.query.id;
  /*   console.log(id); */
  /*   console.log(id); */

  const sesion = useSelector((state) => state.usersData.sesion);
  console.log(sesion);

  const [commentsData, setComments] = useState({
    user: sesion?.id,
    comment: "",
    image:
      "https://blog.openreplay.com/images/building-a-comment-form-with-react-mentions/images/hero.png",
    active: true,
    replyTo: replyTo ? true : false,
    project: project,
  });
  //  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;

    setComments({ ...commentsData, comment: value });
    console.log(commentsData);
  };
  const handleSubmitComment = (e) => {
    e.preventDefault;

    if (typeof sesion?.id === "undefined") {
      Swal.fire({
        icon: "warning",
        title: "Inicia sesión para dejar un comentario",
        footer: '<a href="/auth/login">Por que no te loggeas primero?</a>',
      });
    } else {
      if (
        commentsData.project &&
        commentsData.user &&
        commentsData.comment.trim()
      ) {
        Swal.fire({
          icon: "success",
          title: "Comentario enviado con éxito ",
        });
        dispatch(createComment(commentsData));
      } else {
        Swal.fire({
          icon: "error",
          title: "Tienes que escribir algo primero",
        });
      }
    }
  };

  return (
    <div>
      <form className="flex flex-col ml-3">
        <input
          className="mr-3 h-14 w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="comment"
          value={commentsData.comment}
          placeholder="Deja tu comentario..."
          onChange={(e) => handleChange(e)}
        />
        <div className="flex flex-row justify-end m-3">
          <Button
            margin="1"
            color="primary"
            onPress={(e) => handleSubmitComment(e)}
          >
            {replyTo ? "💬 Responder" : "💬 Comentar"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateComments;