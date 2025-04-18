import React, { useRef, useState } from "react";

export default function Karaoke() {
  const [total, setTotal] = useState(0);
  const noCard = useRef();
  const haveCard = useRef();
  const noCardRadio = useRef();
  const haveCardRadio = useRef();

  const Total = () => {
    const noCardHour = noCard.current.value;
    const haveCardHour = haveCard.current.value;
    const noCardRate = 120;
    const haveCardRate = 80;

    let total = 0;

    if (noCardRadio.current.checked) {
      if (noCardHour === "") {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      total = noCardHour * noCardRate;
    } else if (haveCardRadio.current.checked) {
      if (haveCardHour === "") {
        alert("กรุณากรอกจำนวนชั่วโมง");
        return;
      }
      total = haveCardHour * haveCardRate;
    }

    setTotal(total);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "770px",
      }}
    >
      <div
        style={{
          marginTop: "10px",
          marginLeft: "10px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <table
          border="2"
          style={{ border: "2px solid #000000", width: "400px" }}
        >
          <tbody>
            <tr>
              <td colSpan="2" id="karaoke">
                ร้านคาราโอเกะ
              </td>
            </tr>
            <tr>
              <td>
                <br />
                &nbsp;&nbsp;
                <input type="radio" name="c1" ref={noCardRadio} />{" "}
                ไม่มีบัตรนักศึกษา <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท
                จำนวน
                <input type="text" size="2" ref={noCard} /> ชั่วโมง <br />
                &nbsp;&nbsp;
                <input type="radio" name="c1" ref={haveCardRadio} />{" "}
                มีบัตรนักศึกษา <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
                <input type="text" size="2" ref={haveCard} /> ชั่วโมง <br />
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={Total}>คิดเงิน</button>
        <br />
        รวมเป็นเงินทั้งสิ้น = <input type="text" value={total} readOnly /> บาท
      </div>
    </div>
  );
}
