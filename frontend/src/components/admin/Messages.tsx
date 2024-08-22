import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import {
  deleteMessages,
  getAllMessages,
} from "src/store/reducers/MessagesSlice";

const Messages = () => {
  const Store = useAppSelector((state) => state.MessagesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Store.data === null && dispatch(getAllMessages());
  }, [Store.data, dispatch]);

  const ClearMessages = () => {
    dispatch(deleteMessages());
  };

  const myMessagesRender =
    Array.isArray(Store.data) &&
    Store.data.map(({ message, date }, i) => (
      <tr key={i} className="text-center border-b-[1px] h-10 capitalize">
        <td>{message}</td>
        <td>{new Date(date).toLocaleDateString()}</td>
      </tr>
    ));

  return (
    <>
      <div id="messages" className="container">
        <div className="flex items-center justify-between mt-10 border-b-2 py-1">
          <h1 className="text-2xl font-semibold">Messages</h1>
          <button
            onClick={() => ClearMessages()}
            className="px-4 rounded outline outline-1 transition-all hover:outline-gray"
          >
            Clear
          </button>
        </div>
        <table id="messages" className="w-full px-1 border-x-2 mt-6">
          <thead className="h-12 border-y-2">
            <tr>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{myMessagesRender}</tbody>
        </table>
      </div>
    </>
  );
};

export default Messages;
