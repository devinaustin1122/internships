import profile from "../../images/profile.svg";
import StyledButton from "../../styles/StyledButton";
import StyledTextbox from "../../styles/StyledTexbox";

const ProfileEdit = (props) => {
  return (
    <>
      <svg
        className="close"
        onClick={() => props.setToggle(false)}
        viewBox="0 0 24 24"
      >
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
      <figure className="profile__crop">
        <svg
          className="profile__img"
          width="409"
          height="409"
          viewBox="0 0 409 409"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="409" height="409" fill="#ECECEC" />
          <path d="M186.871 277.883L194.338 170.521H215.668L223.129 277.889L205.094 293.621L186.871 277.883Z" />
          <path d="M213.966 172.288L221.233 277.122L205.088 291.242L188.737 277.134L196.034 172.288H213.966ZM217.363 168.719H192.637L185 278.645L205.1 296L225 278.645L217.363 168.719Z" />
          <path d="M194.242 154.028L188.434 115.784H221.766L215.964 154.028H194.242Z" />
          <path d="M219.659 117.569L214.396 152.244H195.804L190.541 117.569H219.659ZM223.898 114H186.351L192.673 155.812H217.503L223.874 114H223.898Z" />
        </svg>
      </figure>
      <a className="link">select profile picture</a>
      <StyledTextbox placeholder="FULL NAME">
        {props.profile.name}
      </StyledTextbox>
      <StyledTextbox placeholder="ORGANIZATION">
        {props.profile.organization}
      </StyledTextbox>
      <StyledTextbox placeholder="TITLE">{props.profile.title}</StyledTextbox>
      <StyledButton>SAVE CHANGES</StyledButton>
    </>
  );
};

export default ProfileEdit;
