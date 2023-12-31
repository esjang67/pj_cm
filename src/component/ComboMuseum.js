import { useEffect } from "react";
import { useSelector } from "react-redux";

function ComboMuseum({ selId, onSubmit }) {
  // 콤보박스에서 자동조회 만들것!
  // console.log('ComboMuseum', selId)
  // 박물관 리스트
  const { museum } = useSelector((state) => state);
  // 우선 전체 리스트 출력하기. id, name 출력
  const comboMuseumAll = [];
  museum.forEach((element) => {
    comboMuseumAll.push(`${element.id}:${element.mus_nam}`);
  });

  useEffect(()=> {
    const combo = document.querySelector('.combo').firstChild.value;
    console.log('ComboMuseum', combo)
    selId = combo;
  })

  return (
    <div className="ComboMuseum">
      <select className="combo" onChange={onSubmit} value={selId}>
        {comboMuseumAll.map((Mdata) => {
          const cData = Mdata.split(":");
          return (
            <option
              key={cData[0]}
              data-id={cData[0]}
              // selected={String(cData[0]) === String(selId) ? "selected" : ""}
              value={cData[0]}
            >
              {cData[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ComboMuseum;

// 자동조회 참고
// const ComboMuseum = () => {

//   const [inputValue, setInputValue] = useState('')
//   const [isHaveInputValue, setIsHaveInputValue] = useState(false)
//   const [dropDownList, setDropDownList] = useState(wholeTextArray)
//   const [dropDownItemIndex, setDropDownItemIndex] = useState(-1)

//   const showDropDownList = () => {
//     if (inputValue === '') {
//       setIsHaveInputValue(false)
//       setDropDownList([])
//     } else {
//       const choosenTextList = wholeTextArray.filter(textItem =>
//         textItem.includes(inputValue)
//       )
//       setDropDownList(choosenTextList)
//     }
//   }

//   const changeInputValue = event => {
//     setInputValue(event.target.value)
//     setIsHaveInputValue(true)
//   }

//   const clickDropDownItem = clickedItem => {
//     setInputValue(clickedItem)
//     setIsHaveInputValue(false)
//   }

//   const handleDropDownKey = event => {
//     //input에 값이 있을때만 작동
//     if (isHaveInputValue) {
//       if (
//         event.key === 'ArrowDown' &&
//         dropDownList.length - 1 > dropDownItemIndex
//       ) {
//         setDropDownItemIndex(dropDownItemIndex + 1)
//       }

//       if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
//         setDropDownItemIndex(dropDownItemIndex - 1)
//       if (event.key === 'Enter' && dropDownItemIndex >= 0) {
//         clickDropDownItem(dropDownList[dropDownItemIndex])
//         setDropDownItemIndex(-1)
//       }
//     }
//   }

//   useEffect(showDropDownList, [inputValue])

//   return (
//     <WholeBox>
//       {/* <Title text='AutoComplete' /> */}
//       <InputBox isHaveInputValue={isHaveInputValue}>
//         <Input
//           type='text'
//           value={inputValue}
//           onChange={changeInputValue}
//           onKeyUp={handleDropDownKey}
//         />
//         <DeleteButton onClick={() => setInputValue('')}>&times;</DeleteButton>
//       </InputBox>
//       {isHaveInputValue && (
//         <DropDownBox>
//           {dropDownList.length === 0 && (
//             <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
//           )}
//           {dropDownList.map((dropDownItem, dropDownIndex) => {
//             return (
//               <DropDownItem
//                 key={dropDownIndex}
//                 onClick={() => clickDropDownItem(dropDownItem)}
//                 onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
//                 className={
//                   dropDownItemIndex === dropDownIndex ? 'selected' : ''
//                 }
//               >
//                 {dropDownItem}
//               </DropDownItem>
//             )
//           })}
//         </DropDownBox>
//       )}
//     </WholeBox>
//   )
// }

// const activeBorderRadius = '16px 16px 0 0'
// const inactiveBorderRadius = '16px 16px 16px 16px'

// const WholeBox = styled.div`
//   padding: 10px;
// `

// const InputBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 16px;
//   border: 1px solid rgba(0, 0, 0, 0.3);
//   border-radius: ${props =>
//     props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
//   z-index: 3;

//   &:focus-within {
//     box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
//   }
// `

// const Input = styled.input`
//   flex: 1 0 0;
//   margin: 0;
//   padding: 0;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   font-size: 16px;
// `

// const DeleteButton = styled.div`
//   cursor: pointer;
// `

// const DropDownBox = styled.ul`
//   display: block;
//   margin: 0 auto;
//   padding: 8px 0;
//   background-color: white;
//   border: 1px solid rgba(0, 0, 0, 0.3);
//   border-top: none;
//   border-radius: 0 0 16px 16px;
//   box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
//   list-style-type: none;
//   z-index: 3;
// `

// const DropDownItem = styled.li`
//   padding: 0 16px;

//   &.selected {
//     background-color: lightgray;
//   }
// `
// export default ComboMuseum
