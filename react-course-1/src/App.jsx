import { faker } from "@faker-js/faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <h1>Comments Section 🍃</h1>
      <ApprovalCard
        content={
          <CommentDetails
            avatar={faker.image.avatar()}
            authorFirstName={faker.name.firstName()}
            authorLastName={faker.name.lastName()}
            timePosted={faker.date.weekday()}
            commentContent="nice one bro"
          />
        }
      ></ApprovalCard>

      <ApprovalCard
        content={
          <CommentDetails
            avatar={faker.image.avatar()}
            authorFirstName={faker.name.firstName()}
            authorLastName={faker.name.lastName()}
            timePosted={faker.date.weekday()}
            commentContent="nice one bro"
          />
        }
      ></ApprovalCard>
      <ApprovalCard content="Are you sure?"></ApprovalCard>
    </div>
  );
}

export default App;
