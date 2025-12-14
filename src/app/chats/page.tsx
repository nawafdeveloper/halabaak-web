import ChatsSectionLargeSideBar from "@/components/chats-section-large-sidebar";
import EmptyStartChating from "@/components/empty-start-chating";

export default async function ChatsPage() {
    return (
        <div className="w-full h-screen flex">
            <div className="flex md:hidden">
                <ChatsSectionLargeSideBar />
            </div>
            <div className="hidden md:flex w-full h-full">
                <EmptyStartChating />
            </div>
        </div>
    )
}