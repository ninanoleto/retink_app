import React from 'react';
import { DialogBoxType } from './Dialog.types';
import { DialogBoxWrapper, CornerElement } from './DialogBox.styles';

type DialogBoxProps = {
  about: DialogBoxType;
};

const DialogBox = (props: DialogBoxProps) => {
  const { about } = props;

  return (
    <>
      <CornerElement about={about} />
      <DialogBoxWrapper about={about}>
        {(about === DialogBoxType.Help && (
          <span>
            <b>Hi there!!npm install gh-pages --save-dev</b> Need help in
            creating a Marketing plan for your business? I can help you create
            one using <b>Retink AI engine</b>
          </span>
        )) ||
          (about === DialogBoxType.Click && (
            <span>Click on the options to get started</span>
          ))}
      </DialogBoxWrapper>
    </>
  );
};

export default DialogBox;
