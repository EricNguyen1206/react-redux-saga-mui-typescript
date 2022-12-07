export interface ModelState<T> {
    data: T | null;
    isFetching: boolean;
    error: boolean;
}
