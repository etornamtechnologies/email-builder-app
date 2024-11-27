import { FC, useRef } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { css } from "@emotion/react"
import { Button } from "antd";

const EmailBuilder: FC = () => {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      console.log('exportHtml', html);
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <>
      <div >
        <div>
          <Button type="primary" onClick={exportHtml}>Export HTML</Button>
        </div>
        <EmailEditor ref={emailEditorRef} onReady={onReady} />
      </div>
    </>
  )
}

export default EmailBuilder

const container = css`
  background-color: lightblue;
  padding: 20px;
  text-align: center;
`;