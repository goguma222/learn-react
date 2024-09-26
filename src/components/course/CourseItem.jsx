function HeartIconBtn({ onHeartClick, isFavorite = false }) {
  return (
    <button className="btn" onClick={e => onHeartClick(e)}>
      {/* 방법2 코드 간결하고 좋음 */}
      <img
        className="btn__img"
        src={
          isFavorite
            ? '/public/img/heart-fill-icon.svg'
            : '/public/img/heart-icon.svg'
        }
        alt="하트"
      />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/public/img/link-icon.svg" alt="링크" />
    </a>
  );
}

export default function CourseItem({
  onFavorite,
  id,
  title,
  description,
  thumbnail,
  isFavorite,
  link,
}) {
  // const isEmpty = false;

  // if(isEmpty) {
  //   return (
  //     <p>강의가 없습니다.</p>
  //   )
  // }

  function handleFavorite(e) {
    e.stopPropagation();
    // alert(isFavorite ? '좋아요' : '모르겠어요');
    onFavorite(id, !isFavorite);
  }

  function handleItemClick() {
    alert('item click~');
    window.open(link, '_blank');
  }

  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course_icons">
        <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}
