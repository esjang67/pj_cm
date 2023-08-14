// redux meseum에서 id로 name 가져오기
export const getMuseumName = (date, findID) => {

  let findname = date.find((d)=> String(d.id) === String(findID))
  return findname.mus_nam;
}