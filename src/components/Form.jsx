import { useForm } from "react-hook-form";
import "../styles/components/Form.css";
import { invertFormFlag } from "../redux/states/formFlagSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerNames } from "../redux/states/setPlayerNamesSlice";
import { setVal } from "../redux/states/setPlayersSlice";
import { useEffect } from "react";

const Form = () => {
  const dispatch = useDispatch();
  let numPlayers = useSelector((state) => state.numPlayers.numPlayers);
  const players = useSelector((state) => state.players.players);

  const setValue = (event) => {
    numPlayers = event.target.value;
    dispatch(setVal(numPlayers));
  };

  useEffect(() => {
    const playerNameFields = document.querySelectorAll(
      ".players-info-container input"
    );
    playerNameFields.forEach((field) => {
      if (field.hasAttribute("disabled")) {
        field.removeAttribute("disabled");
      }
    });
    for (let i = 0; i < 4 - numPlayers; i++) {
      playerNameFields[4 - i - 1].setAttribute("disabled", "");
    }
  }, [numPlayers]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      dispatch(setPlayerNames({ player: key, name: value }));
    });
    dispatch(invertFormFlag());
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="form">
      <div className="form-heading">Number of players</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="radio-options">
          <input
            type="radio"
            name="numPlayers"
            id="2"
            value={2}
            onClick={setValue}
          />
          <label htmlFor="2">2</label>
          <input
            type="radio"
            name="numPlayers"
            id="3"
            value={3}
            onClick={setValue}
          />
          <label htmlFor="3">3</label>
          <input
            type="radio"
            name="numPlayers"
            id="4"
            value={4}
            onClick={setValue}
          />
          <label htmlFor="4">4</label>
        </div>
        <div className="players-info-container">
          <input
            id="P1"
            className="P1"
            placeholder="Enter name"
            required
            {...register("P1")}
          />
          {errors["P1"] && <div className="red">This field is required</div>}
          <input
            id="P2"
            placeholder="Enter name"
            required
            {...register("P2")}
          />
          {errors["P2"] && <div className="red">This field is required</div>}
          <input
            id="P3"
            placeholder="Enter name"
            required
            {...register("P3")}
          />
          {errors["P3"] && <div className="red">This field is required</div>}
          <input
            id="P4"
            placeholder="Enter name"
            required
            {...register("P4")}
          />
          {errors["P4"] && <div className="red">This field is required</div>}
          {}
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <button type="submit" className="play-btn">
          Play
        </button>
      </form>
    </div>
  );
};

export default Form;
