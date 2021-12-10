import { DialogBoxWrapper, El } from './DialogBox.styles';

type DialogBoxProps = {
  about: 'help' | 'click';
};

const DialogBox = (props: DialogBoxProps) => {
  const { about } = props;

  return (
    <>
      <El about={about} />
      <DialogBoxWrapper about={about}>
        {about === 'help' && (
          <span>
            <b>Hi there!</b> Need help in creating a Marketing plan for your
            business? I can help you create one using <b>Retink AI engine</b>
          </span>
        )}
        {about === 'click' && <span>Click on the options to get started</span>}
      </DialogBoxWrapper>
    </>
  );
};

export default DialogBox;
