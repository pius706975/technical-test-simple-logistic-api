import { repo } from './user.repo';
import { CustomError } from '@/utils/custom-error';
import { verifyJWT } from '@/middlewares/jwt.service';
import { JWT_ACCESS_TOKEN_SECRET } from '@/config';
import { formatDate } from '@/utils/get-current-time';

export const getUserProfileService = async (accessToken: string) => {
    const decodeToken = await verifyJWT(
        accessToken,
        JWT_ACCESS_TOKEN_SECRET as string,
    );

    const userId = decodeToken.userId;

    const user = await repo.getUserProfile(userId);
    if (!user) {
        throw new CustomError('User not found', 404);
    }

    const data = {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        created_at: formatDate(user.created_at, 'Asia/Jakarta'),
        updated_at: user.updated_at
            ? formatDate(user.updated_at, 'Asia/Jakarta')
            : null,
    };

    return data;
};
