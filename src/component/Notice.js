function Notice() {
  const MokData = [
    {id:3 ,date:'2023-08-17', title:'국립 박물관만 조회됩니다.'},
    {id:2 ,date:'2023-08-16', title:'홈페이지 오픈'},
    {id:1 ,date:'2023-08-13', title:'시범운영 중'}, 
    {id:0 ,date:'2023-08-04', title:'놀러와 박물관에 오신 여러분 환영해요'}
  ];

  return (
    <div className="Notice">
      <div className="noticeName">
        <i className="fa-regular fa-clipboard"/> 공지사항
      </div>
      <>
      {
        MokData.map((data) => {
          return(
          <div className="noticeList" key={data.id}>
            <div className="noticeDate">{data.date}</div>
            <div className="noticeTitle">{data.title}</div>
          </div>
          )
        })
      }
      </>
    </div>
    )
}
export default Notice;