// problem 페이지 sample 컴포넌트
import React from "react";
import { renderStyledNewlines } from "components/common/Common";

const SampleContent = ({problem}) => {
  return (
    <>
    <div className="bottom">
        <div className="sample_inputs" style={{ whiteSpace: "pre" }}>
        <p className="underline">Sample Inputs</p>
        <div className="input_text">
            {problem?.sampleInputs &&
            problem.sampleInputs.map((input, index) => (
                <React.Fragment key={index}>
                {/* renderStyledNewlines : '\n\n' 기준으로 줄바꿈 함수 */}
                {renderStyledNewlines(input)}
                </React.Fragment>
            ))}
        </div>
        </div>

        <div className="sample_outputs" style={{ whiteSpace: "pre" }}>
        <p className="underline">Sample Outputs</p>
        <div className="output_text">
            {problem?.sampleOutputs &&
            problem.sampleOutputs.map((output, index) => (
                <React.Fragment key={index}>
                {renderStyledNewlines(output)}
                </React.Fragment>
            ))}
        </div>
        </div>
    </div>
      
    </>
  )
}

export default SampleContent
