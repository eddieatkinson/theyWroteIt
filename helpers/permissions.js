import { Permissions } from 'expo';

export async function permissionsForCamera() {
  const response = await Permissions.askAsync(Permissions.CAMERA);
  return response;
}

export async function permissionsForCameraRoll() {
  const response = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  return response;
}
