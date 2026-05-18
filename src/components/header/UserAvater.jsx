import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import LogoutButton from "./LogoutButton";

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

export default function UserAvater({ session }) {
  const ImageIsValid = isValidUrl(session?.user?.image);
  console.log(ImageIsValid);
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        {ImageIsValid ? (
          <Avatar>
            <Avatar.Image
              alt="Junior Garcia"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
            />
            <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
          </Avatar>
        ) : (
          <Avatar color="accent">
            <Avatar.Fallback> {session?.user?.name[0]} </Avatar.Fallback>
          </Avatar>
        )}
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            {ImageIsValid ? (
              <Avatar>
                <Avatar.Image
                  alt="Junior Garcia"
                  src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                />
                <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
              </Avatar>
            ) : (
              <Avatar color="accent">
                <Avatar.Fallback> {session?.user?.name[0]} </Avatar.Fallback>
              </Avatar>
            )}
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium"> {session?.user?.name} </p>
              <p className="text-xs leading-none text-muted"> {session?.user?.email} </p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <LogoutButton />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
