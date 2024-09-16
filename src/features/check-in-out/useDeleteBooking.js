import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { mutate: deletingBooking, isLoading: isDeleting } = useMutation({
        mutationFn: (bookingId) => {
            deleteBooking(bookingId);
        },
        onSuccess: (data) => {
            toast.success(`Booking successfully deleted`);
            queryClient.invalidateQueries({ queryKey: ['bookings'] });
        },

        onError: () => toast.error('There was an error while deleting'),
    });

    return { deletingBooking, isDeleting };
}
