import { useState } from 'react';
import Button from './Button';
import Result from './Result';
import '../MainStyle.css';
function FormInpt() { 
  
  const [job, setJob] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(false);

  const handleCalSubmit = (e) => {
    e.preventDefault();
    if (job === '' || time === '') {
        alert('직업 또는 시간을 입력하지 않았습니다.')
        setResult(false);
    }
    else{
    setResult(true);
    }
  };

  const handleJobInput = (e) => {
    console.log("job", e.target.value);
    setJob(e.target.value);
  };
  const handleTimeInput = (e) => {
    console.log("time", e.target.value);
    setTime(e.target.value);
  };

  return (
    <>
    <form className ="input-info" onSubmit={handleCalSubmit}>
        <p>나는 
          <label className ="a11y-hidden" >직군</label>
          <input className="inpt-job" placeholder="예)프로그래밍" value={job} onChange={handleJobInput} />전문가가 될 것이다.</p>
        <p>그래서 앞으로 매일 하루에 
          <label className="a11y-hidden">시간</label>
          <input className = "inpt-time" placeholder="예)5시간" value={time} onChange={handleTimeInput} type ="number" min = "0" step = "1" />시간씩 훈련할 것이다.</p>
          <Button type = "submit" className = "btn-submit" content ="나는 며칠 동안 훈련을 해야 1만 시간이 될까?"/>
      </form>
          {result && <Result job = {job} time = {time}/>}
      </>
  );
}

export default FormInpt;

