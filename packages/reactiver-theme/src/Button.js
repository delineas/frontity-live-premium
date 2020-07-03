import { connect } from "frontity";

const Button = ({actions, state}) => {
    return (
      <div>
        {state.theme.isOpen ? (
          <button onClick={actions.theme.close}>Está abierto</button>
        ) : (
          <button onClick={actions.theme.open}>Está cerrado</button>
        )}
      </div>
    );
}

export default connect(Button);
