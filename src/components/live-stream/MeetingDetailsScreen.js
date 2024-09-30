import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import { Constants } from "@videosdk.live/react-sdk";
import React, { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";
import { ArrowLeft } from "@phosphor-icons/react";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  setMeetingMode,
  meetingMode,
}) {
  const [studioCode, setStudioCode] = useState("");
  const [studioCodeError, setStudioCodeError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  return (
    <div
      className={`flex flex-1 flex-col justify-center w-full md:p-[6px] sm:p-2 p-4`}
    >
      {iscreateMeetingClicked ? (
        <div className="border border-solid border-primary text-primary rounded-full px-3 py-2  flex items-center justify-center">
          <p className="text-base">{`Studio code : ${studioCode}`}</p>
          <button
            className="ml-2"
            onClick={() => { 
              navigator.clipboard.writeText(studioCode);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <Button variant="tetiary" className="mb-6 px-2 py-1 rounded-full" onClick={() => setIsJoinMeetingClicked(false)}>
            <ArrowLeft size={20} color="gray" />
          </Button>
          <Input
            defaultValue={studioCode}
            error={studioCodeError && "Please enter valid studioCode"}
            onChange={(e) => {
              setStudioCode(e.target.value);
            }}
            placeholder={"Enter studio code"}
            className="rounded-full w-full"
          />
         
        </>
      ) : null}

      {(iscreateMeetingClicked || isJoinMeetingClicked) && (
        <div>
          <div className="flex flex-col gap-5 my-5">
            <Input
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
              placeholder="Enter your name"
              className="rounded-full"
            />
            <Button
              disabled={participantName.length < 3}
              className={`w-full ${
                participantName.length < 3 ? "bg-primary" : "bg-primary"
              } rounded-full`}
              onClick={() => {
                if (iscreateMeetingClicked) {
                  if (videoTrack) {
                    videoTrack.stop();
                    setVideoTrack(null);
                  }
                  onClickStartMeeting();
                } else {
                  if (studioCode.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                    onClickJoin(studioCode);
                  } else setStudioCodeError(true);
                }
              }}
            >
              {iscreateMeetingClicked
                ? "Start a meeting"
                : isJoinMeetingClicked &&
                  meetingMode === Constants.modes.CONFERENCE
                ? "Join Studio"
                : "Join Streaming Room"}
            </Button>
          </div>
        </div>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 mt-4 flex flex-col">
          <div className="flex items-center justify-center flex-col w-full">
            <Button
              size="full"
              className="rounded-full"
              onClick={async () => {
                const studioCode = await _handleOnCreateMeeting();
                setStudioCode(studioCode);
                setIscreateMeetingClicked(true);
                setMeetingMode(Constants.modes.CONFERENCE);
              }}
            >
              Create a meeting
            </Button>

            <Button
              size="full"
              variant="secondary"
              className="w-full mt-5 rounded-full"
              onClick={async () => {
                setIsJoinMeetingClicked(true);
                setMeetingMode(Constants.modes.CONFERENCE);
              }}
            >
              Join as a Host
            </Button>
            <Button
              size="full"
              variant="tetiary"
              className="rounded-full mt-5"
              onClick={() => {
                setIsJoinMeetingClicked(true);
                setMeetingMode(Constants.modes.VIEWER);
              }}
            >
              Join as a Viewer
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
