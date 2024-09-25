import { Fragment } from "react";
import CourseItem from "./CourseItem";
import Card from "../Card";

export default function CourseListCard({ onFavorite, title, items }) {

  const lastIndex = items.length - 1;

  return (
    <>
      <Card title={title}>
        {/* <div>Hello React!!</div> */}
        <div className="courses">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <CourseItem {...item} onFavorite={onFavorite} />
              {index !== lastIndex && <hr className="divider" />}
            </Fragment>
          ))}
        </div>
      </Card>
    </>
  );
}
