import { Button, InputNumber, Modal } from "antd";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { IBox } from "../../type/types";

interface ISetting {
  setting: Array<number>;
  setSettingDatas: Function;
  handleClickSetting: Function;
  gamesDatas: Array<Array<IBox>>;
}

export default function Setting(props: ISetting) {
  const { setting, setSettingDatas, handleClickSetting, gamesDatas } = props;
  const [visible, setVisible] = useState(false);
  const [formCaches, setFormCaches] = useState(setting);

  const settingFnc = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      <Button type="primary" onClick={settingFnc}>
        设置
      </Button>
      <Modal
        title="设置"
        visible={visible}
        onOk={() => {
          setSettingDatas(formCaches);
          setVisible(false);
          handleClickSetting();
        }}
        onCancel={() => {
          setVisible(false);
        }}
        okText="确认"
        cancelText="取消"
      >
        <div style={DefaultSettingWrapperStyle}>
          {formCaches.map((item, index) => {
            return (
              <div style={DefaultSettingRowStyle} key={Math.random()}>
                <span>第{index + 1}行</span>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={item}
                  onChange={(num) => {
                    const data = JSON.parse(JSON.stringify(formCaches));
                    data.splice(index, 1, num);
                    setFormCaches(data);
                  }}
                />
                <Button
                  onClick={() => {
                    const data = JSON.parse(JSON.stringify(formCaches));
                    data.splice(index + 1, 0, 1);
                    setFormCaches(data);
                  }}
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    const data = JSON.parse(JSON.stringify(formCaches));
                    data.splice(index, 1);
                    setFormCaches(data);
                  }}
                >
                  -
                </Button>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

const DefaultSettingWrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
};

const DefaultSettingRowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginBottom: "10px",
};
