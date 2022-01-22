import { isNil } from "ramda";

const enum MaybeType {
  Nothing = "Nothing",
  Just = "Just",
}

type Nothing = { type: MaybeType.Nothing };
type Just<T> = { type: MaybeType.Just; value: T };
type MaybeValue<T> = Nothing | Just<T>;

export class Maybe<ValueType> {
  private constructor(private readonly data: MaybeValue<ValueType>) {}

  public static just<T>(value: T): Maybe<T> {
    return new Maybe({ type: MaybeType.Just, value });
  }

  public static nothing<T>(): Maybe<T> {
    return new Maybe({ type: MaybeType.Nothing });
  }

  public isJust(): boolean {
    return this.data.type === MaybeType.Just;
  }

  public isNothing(): boolean {
    return this.data.type === MaybeType.Nothing;
  }

  public option(fn: () => ValueType): ValueType {
    return this.data.type === MaybeType.Just ? this.data.value : fn();
  }

  public chain<R>(fn: (wrapped: ValueType) => Maybe<R>): Maybe<R> {
    return this.data.type === MaybeType.Just
      ? fn(this.data.value)
      : Maybe.nothing();
  }

  public map<R>(fn: (wrapped: ValueType) => R): Maybe<R> {
    return this.chain((data) => Maybe.just(fn(data)));
  }
}

export const just = <T>(value: T): Maybe<T> => Maybe.just(value);

export const nothing = <T>(): Maybe<T> => Maybe.nothing();

export const isJust = <T>(maybe: Maybe<T>): boolean => maybe.isJust();

export const isNothing = <T>(maybe: Maybe<T>): boolean => maybe.isNothing();

export const option =
  <T>(fn: () => T) =>
  (M: Maybe<T>): T =>
    M.option(fn);

export const chain =
  <T, R>(fn: (wrapped: T) => Maybe<R>) =>
  (M: Maybe<T>): Maybe<R> =>
    M.chain(fn);

export const map =
  <T, R>(fn: (wrapped: T) => R) =>
  (M: Maybe<T>): Maybe<R> =>
    M.map(fn);

export const fromNullable = <T>(value: T | null | undefined): Maybe<T> =>
  isNil(value) ? Maybe.nothing() : Maybe.just(value);