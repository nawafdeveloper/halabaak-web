import ChatsSectionLargeSideBar from "@/components/chats-section-large-sidebar";
import EmptyStartChating from "@/components/empty-start-chating";
import { ChatItemType } from "@/mocks/fake-types";

export default async function ChatsPage() {
    const response = await fetch(
        'https://fake-chats-data-fetch.n-qahtani.workers.dev/data'
    );

    if (!response.ok) {
        console.log(response)
    }

    const data: ChatItemType[] = await response.json();

    return (
        <div className="w-full h-screen max-h-screen min-h-screen">
            <div className="flex md:hidden">
                <ChatsSectionLargeSideBar data={data} />
            </div>
            <div className="hidden md:flex w-full h-full">
                <EmptyStartChating />
            </div>
        </div>
    )
}