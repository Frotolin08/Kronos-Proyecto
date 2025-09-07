
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model persona
 * 
 */
export type persona = $Result.DefaultSelection<Prisma.$personaPayload>
/**
 * Model archivos
 * 
 */
export type archivos = $Result.DefaultSelection<Prisma.$archivosPayload>
/**
 * Model mensajes
 * 
 */
export type mensajes = $Result.DefaultSelection<Prisma.$mensajesPayload>
/**
 * Model tareas
 * 
 */
export type tareas = $Result.DefaultSelection<Prisma.$tareasPayload>
/**
 * Model personalizaciones
 * 
 */
export type personalizaciones = $Result.DefaultSelection<Prisma.$personalizacionesPayload>
/**
 * Model tiene
 * 
 */
export type tiene = $Result.DefaultSelection<Prisma.$tienePayload>
/**
 * Model proyecto
 * 
 */
export type proyecto = $Result.DefaultSelection<Prisma.$proyectoPayload>
/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Personas
 * const personas = await prisma.persona.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Personas
   * const personas = await prisma.persona.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.persona`: Exposes CRUD operations for the **persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.personaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archivos`: Exposes CRUD operations for the **archivos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivos
    * const archivos = await prisma.archivos.findMany()
    * ```
    */
  get archivos(): Prisma.archivosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensajes`: Exposes CRUD operations for the **mensajes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensajes.findMany()
    * ```
    */
  get mensajes(): Prisma.mensajesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tareas`: Exposes CRUD operations for the **tareas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tareas
    * const tareas = await prisma.tareas.findMany()
    * ```
    */
  get tareas(): Prisma.tareasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalizaciones`: Exposes CRUD operations for the **personalizaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personalizaciones
    * const personalizaciones = await prisma.personalizaciones.findMany()
    * ```
    */
  get personalizaciones(): Prisma.personalizacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiene`: Exposes CRUD operations for the **tiene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tienes
    * const tienes = await prisma.tiene.findMany()
    * ```
    */
  get tiene(): Prisma.tieneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyecto`: Exposes CRUD operations for the **proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyecto.findMany()
    * ```
    */
  get proyecto(): Prisma.proyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    persona: 'persona',
    archivos: 'archivos',
    mensajes: 'mensajes',
    tareas: 'tareas',
    personalizaciones: 'personalizaciones',
    tiene: 'tiene',
    proyecto: 'proyecto',
    chat: 'chat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "persona" | "archivos" | "mensajes" | "tareas" | "personalizaciones" | "tiene" | "proyecto" | "chat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      persona: {
        payload: Prisma.$personaPayload<ExtArgs>
        fields: Prisma.personaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findFirst: {
            args: Prisma.personaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          findMany: {
            args: Prisma.personaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          create: {
            args: Prisma.personaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          createMany: {
            args: Prisma.personaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          delete: {
            args: Prisma.personaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          update: {
            args: Prisma.personaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          deleteMany: {
            args: Prisma.personaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>[]
          }
          upsert: {
            args: Prisma.personaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.personaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.personaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      archivos: {
        payload: Prisma.$archivosPayload<ExtArgs>
        fields: Prisma.archivosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archivosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archivosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          findFirst: {
            args: Prisma.archivosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archivosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          findMany: {
            args: Prisma.archivosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>[]
          }
          create: {
            args: Prisma.archivosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          createMany: {
            args: Prisma.archivosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.archivosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>[]
          }
          delete: {
            args: Prisma.archivosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          update: {
            args: Prisma.archivosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          deleteMany: {
            args: Prisma.archivosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archivosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.archivosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>[]
          }
          upsert: {
            args: Prisma.archivosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivosPayload>
          }
          aggregate: {
            args: Prisma.ArchivosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivos>
          }
          groupBy: {
            args: Prisma.archivosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivosGroupByOutputType>[]
          }
          count: {
            args: Prisma.archivosCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivosCountAggregateOutputType> | number
          }
        }
      }
      mensajes: {
        payload: Prisma.$mensajesPayload<ExtArgs>
        fields: Prisma.mensajesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensajesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensajesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findFirst: {
            args: Prisma.mensajesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensajesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findMany: {
            args: Prisma.mensajesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          create: {
            args: Prisma.mensajesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          createMany: {
            args: Prisma.mensajesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mensajesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          delete: {
            args: Prisma.mensajesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          update: {
            args: Prisma.mensajesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          deleteMany: {
            args: Prisma.mensajesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensajesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mensajesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          upsert: {
            args: Prisma.mensajesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          aggregate: {
            args: Prisma.MensajesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajes>
          }
          groupBy: {
            args: Prisma.mensajesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensajesCountArgs<ExtArgs>
            result: $Utils.Optional<MensajesCountAggregateOutputType> | number
          }
        }
      }
      tareas: {
        payload: Prisma.$tareasPayload<ExtArgs>
        fields: Prisma.tareasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tareasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tareasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          findFirst: {
            args: Prisma.tareasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tareasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          findMany: {
            args: Prisma.tareasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          create: {
            args: Prisma.tareasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          createMany: {
            args: Prisma.tareasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tareasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          delete: {
            args: Prisma.tareasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          update: {
            args: Prisma.tareasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          deleteMany: {
            args: Prisma.tareasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tareasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tareasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>[]
          }
          upsert: {
            args: Prisma.tareasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tareasPayload>
          }
          aggregate: {
            args: Prisma.TareasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTareas>
          }
          groupBy: {
            args: Prisma.tareasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TareasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tareasCountArgs<ExtArgs>
            result: $Utils.Optional<TareasCountAggregateOutputType> | number
          }
        }
      }
      personalizaciones: {
        payload: Prisma.$personalizacionesPayload<ExtArgs>
        fields: Prisma.personalizacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personalizacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personalizacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          findFirst: {
            args: Prisma.personalizacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personalizacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          findMany: {
            args: Prisma.personalizacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>[]
          }
          create: {
            args: Prisma.personalizacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          createMany: {
            args: Prisma.personalizacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personalizacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>[]
          }
          delete: {
            args: Prisma.personalizacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          update: {
            args: Prisma.personalizacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          deleteMany: {
            args: Prisma.personalizacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personalizacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personalizacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>[]
          }
          upsert: {
            args: Prisma.personalizacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personalizacionesPayload>
          }
          aggregate: {
            args: Prisma.PersonalizacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalizaciones>
          }
          groupBy: {
            args: Prisma.personalizacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalizacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.personalizacionesCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalizacionesCountAggregateOutputType> | number
          }
        }
      }
      tiene: {
        payload: Prisma.$tienePayload<ExtArgs>
        fields: Prisma.tieneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tieneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tieneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          findFirst: {
            args: Prisma.tieneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tieneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          findMany: {
            args: Prisma.tieneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>[]
          }
          create: {
            args: Prisma.tieneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          createMany: {
            args: Prisma.tieneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tieneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>[]
          }
          delete: {
            args: Prisma.tieneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          update: {
            args: Prisma.tieneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          deleteMany: {
            args: Prisma.tieneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tieneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tieneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>[]
          }
          upsert: {
            args: Prisma.tieneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tienePayload>
          }
          aggregate: {
            args: Prisma.TieneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiene>
          }
          groupBy: {
            args: Prisma.tieneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TieneGroupByOutputType>[]
          }
          count: {
            args: Prisma.tieneCountArgs<ExtArgs>
            result: $Utils.Optional<TieneCountAggregateOutputType> | number
          }
        }
      }
      proyecto: {
        payload: Prisma.$proyectoPayload<ExtArgs>
        fields: Prisma.proyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          findFirst: {
            args: Prisma.proyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          findMany: {
            args: Prisma.proyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          create: {
            args: Prisma.proyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          createMany: {
            args: Prisma.proyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          delete: {
            args: Prisma.proyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          update: {
            args: Prisma.proyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          deleteMany: {
            args: Prisma.proyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          upsert: {
            args: Prisma.proyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          aggregate: {
            args: Prisma.ProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyecto>
          }
          groupBy: {
            args: Prisma.proyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.proyectoCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectoCountAggregateOutputType> | number
          }
        }
      }
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    persona?: personaOmit
    archivos?: archivosOmit
    mensajes?: mensajesOmit
    tareas?: tareasOmit
    personalizaciones?: personalizacionesOmit
    tiene?: tieneOmit
    proyecto?: proyectoOmit
    chat?: chatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    archivos: number
    mensajes: number
    tareas: number
    personalizaciones: number
    proyectos_tiene: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | PersonaCountOutputTypeCountArchivosArgs
    mensajes?: boolean | PersonaCountOutputTypeCountMensajesArgs
    tareas?: boolean | PersonaCountOutputTypeCountTareasArgs
    personalizaciones?: boolean | PersonaCountOutputTypeCountPersonalizacionesArgs
    proyectos_tiene?: boolean | PersonaCountOutputTypeCountProyectos_tieneArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivosWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountPersonalizacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personalizacionesWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountProyectos_tieneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tieneWhereInput
  }


  /**
   * Count Type ProyectoCountOutputType
   */

  export type ProyectoCountOutputType = {
    archivos: number
    tareas: number
    chats: number
    personas_tiene: number
  }

  export type ProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | ProyectoCountOutputTypeCountArchivosArgs
    tareas?: boolean | ProyectoCountOutputTypeCountTareasArgs
    chats?: boolean | ProyectoCountOutputTypeCountChatsArgs
    personas_tiene?: boolean | ProyectoCountOutputTypeCountPersonas_tieneArgs
  }

  // Custom InputTypes
  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectoCountOutputType
     */
    select?: ProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivosWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountPersonas_tieneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tieneWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    mensajes: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ChatCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonaSumAggregateOutputType = {
    id: number | null
  }

  export type PersonaMinAggregateOutputType = {
    id: number | null
    mail: string | null
    nombre: string | null
    contrasenia: string | null
    usuario: string | null
    googleRefreshToken: string | null
  }

  export type PersonaMaxAggregateOutputType = {
    id: number | null
    mail: string | null
    nombre: string | null
    contrasenia: string | null
    usuario: string | null
    googleRefreshToken: string | null
  }

  export type PersonaCountAggregateOutputType = {
    id: number
    mail: number
    nombre: number
    contrasenia: number
    usuario: number
    googleRefreshToken: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    id?: true
  }

  export type PersonaSumAggregateInputType = {
    id?: true
  }

  export type PersonaMinAggregateInputType = {
    id?: true
    mail?: true
    nombre?: true
    contrasenia?: true
    usuario?: true
    googleRefreshToken?: true
  }

  export type PersonaMaxAggregateInputType = {
    id?: true
    mail?: true
    nombre?: true
    contrasenia?: true
    usuario?: true
    googleRefreshToken?: true
  }

  export type PersonaCountAggregateInputType = {
    id?: true
    mail?: true
    nombre?: true
    contrasenia?: true
    usuario?: true
    googleRefreshToken?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which persona to aggregate.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type personaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personaWhereInput
    orderBy?: personaOrderByWithAggregationInput | personaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: personaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken: string | null
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends personaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type personaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mail?: boolean
    nombre?: boolean
    contrasenia?: boolean
    usuario?: boolean
    googleRefreshToken?: boolean
    archivos?: boolean | persona$archivosArgs<ExtArgs>
    mensajes?: boolean | persona$mensajesArgs<ExtArgs>
    tareas?: boolean | persona$tareasArgs<ExtArgs>
    personalizaciones?: boolean | persona$personalizacionesArgs<ExtArgs>
    proyectos_tiene?: boolean | persona$proyectos_tieneArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type personaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mail?: boolean
    nombre?: boolean
    contrasenia?: boolean
    usuario?: boolean
    googleRefreshToken?: boolean
  }, ExtArgs["result"]["persona"]>

  export type personaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mail?: boolean
    nombre?: boolean
    contrasenia?: boolean
    usuario?: boolean
    googleRefreshToken?: boolean
  }, ExtArgs["result"]["persona"]>

  export type personaSelectScalar = {
    id?: boolean
    mail?: boolean
    nombre?: boolean
    contrasenia?: boolean
    usuario?: boolean
    googleRefreshToken?: boolean
  }

  export type personaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mail" | "nombre" | "contrasenia" | "usuario" | "googleRefreshToken", ExtArgs["result"]["persona"]>
  export type personaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | persona$archivosArgs<ExtArgs>
    mensajes?: boolean | persona$mensajesArgs<ExtArgs>
    tareas?: boolean | persona$tareasArgs<ExtArgs>
    personalizaciones?: boolean | persona$personalizacionesArgs<ExtArgs>
    proyectos_tiene?: boolean | persona$proyectos_tieneArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type personaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type personaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $personaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "persona"
    objects: {
      archivos: Prisma.$archivosPayload<ExtArgs>[]
      mensajes: Prisma.$mensajesPayload<ExtArgs>[]
      tareas: Prisma.$tareasPayload<ExtArgs>[]
      personalizaciones: Prisma.$personalizacionesPayload<ExtArgs>[]
      proyectos_tiene: Prisma.$tienePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mail: string
      nombre: string
      contrasenia: string
      usuario: string
      googleRefreshToken: string | null
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type personaGetPayload<S extends boolean | null | undefined | personaDefaultArgs> = $Result.GetResult<Prisma.$personaPayload, S>

  type personaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface personaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['persona'], meta: { name: 'persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {personaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personaFindUniqueArgs>(args: SelectSubset<T, personaFindUniqueArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personaFindUniqueOrThrowArgs>(args: SelectSubset<T, personaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personaFindFirstArgs>(args?: SelectSubset<T, personaFindFirstArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personaFindFirstOrThrowArgs>(args?: SelectSubset<T, personaFindFirstOrThrowArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaWithIdOnly = await prisma.persona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personaFindManyArgs>(args?: SelectSubset<T, personaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {personaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends personaCreateArgs>(args: SelectSubset<T, personaCreateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {personaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personaCreateManyArgs>(args?: SelectSubset<T, personaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {personaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personaCreateManyAndReturnArgs>(args?: SelectSubset<T, personaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {personaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends personaDeleteArgs>(args: SelectSubset<T, personaDeleteArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {personaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personaUpdateArgs>(args: SelectSubset<T, personaUpdateArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {personaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personaDeleteManyArgs>(args?: SelectSubset<T, personaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personaUpdateManyArgs>(args: SelectSubset<T, personaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {personaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personaUpdateManyAndReturnArgs>(args: SelectSubset<T, personaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {personaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends personaUpsertArgs>(args: SelectSubset<T, personaUpsertArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends personaCountArgs>(
      args?: Subset<T, personaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personaGroupByArgs['orderBy'] }
        : { orderBy?: personaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the persona model
   */
  readonly fields: personaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archivos<T extends persona$archivosArgs<ExtArgs> = {}>(args?: Subset<T, persona$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes<T extends persona$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, persona$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tareas<T extends persona$tareasArgs<ExtArgs> = {}>(args?: Subset<T, persona$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalizaciones<T extends persona$personalizacionesArgs<ExtArgs> = {}>(args?: Subset<T, persona$personalizacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proyectos_tiene<T extends persona$proyectos_tieneArgs<ExtArgs> = {}>(args?: Subset<T, persona$proyectos_tieneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the persona model
   */
  interface personaFieldRefs {
    readonly id: FieldRef<"persona", 'Int'>
    readonly mail: FieldRef<"persona", 'String'>
    readonly nombre: FieldRef<"persona", 'String'>
    readonly contrasenia: FieldRef<"persona", 'String'>
    readonly usuario: FieldRef<"persona", 'String'>
    readonly googleRefreshToken: FieldRef<"persona", 'String'>
  }
    

  // Custom InputTypes
  /**
   * persona findUnique
   */
  export type personaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findUniqueOrThrow
   */
  export type personaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona findFirst
   */
  export type personaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findFirstOrThrow
   */
  export type personaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which persona to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona findMany
   */
  export type personaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter, which personas to fetch.
     */
    where?: personaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personas to fetch.
     */
    orderBy?: personaOrderByWithRelationInput | personaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personas.
     */
    cursor?: personaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * persona create
   */
  export type personaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to create a persona.
     */
    data: XOR<personaCreateInput, personaUncheckedCreateInput>
  }

  /**
   * persona createMany
   */
  export type personaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * persona createManyAndReturn
   */
  export type personaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * The data used to create many personas.
     */
    data: personaCreateManyInput | personaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * persona update
   */
  export type personaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The data needed to update a persona.
     */
    data: XOR<personaUpdateInput, personaUncheckedUpdateInput>
    /**
     * Choose, which persona to update.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona updateMany
   */
  export type personaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to update.
     */
    limit?: number
  }

  /**
   * persona updateManyAndReturn
   */
  export type personaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * The data used to update personas.
     */
    data: XOR<personaUpdateManyMutationInput, personaUncheckedUpdateManyInput>
    /**
     * Filter which personas to update
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to update.
     */
    limit?: number
  }

  /**
   * persona upsert
   */
  export type personaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * The filter to search for the persona to update in case it exists.
     */
    where: personaWhereUniqueInput
    /**
     * In case the persona found by the `where` argument doesn't exist, create a new persona with this data.
     */
    create: XOR<personaCreateInput, personaUncheckedCreateInput>
    /**
     * In case the persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personaUpdateInput, personaUncheckedUpdateInput>
  }

  /**
   * persona delete
   */
  export type personaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
    /**
     * Filter which persona to delete.
     */
    where: personaWhereUniqueInput
  }

  /**
   * persona deleteMany
   */
  export type personaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personas to delete
     */
    where?: personaWhereInput
    /**
     * Limit how many personas to delete.
     */
    limit?: number
  }

  /**
   * persona.archivos
   */
  export type persona$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    where?: archivosWhereInput
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    cursor?: archivosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }

  /**
   * persona.mensajes
   */
  export type persona$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    cursor?: mensajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * persona.tareas
   */
  export type persona$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    cursor?: tareasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * persona.personalizaciones
   */
  export type persona$personalizacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    where?: personalizacionesWhereInput
    orderBy?: personalizacionesOrderByWithRelationInput | personalizacionesOrderByWithRelationInput[]
    cursor?: personalizacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalizacionesScalarFieldEnum | PersonalizacionesScalarFieldEnum[]
  }

  /**
   * persona.proyectos_tiene
   */
  export type persona$proyectos_tieneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    where?: tieneWhereInput
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    cursor?: tieneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TieneScalarFieldEnum | TieneScalarFieldEnum[]
  }

  /**
   * persona without action
   */
  export type personaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: personaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the persona
     */
    omit?: personaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personaInclude<ExtArgs> | null
  }


  /**
   * Model archivos
   */

  export type AggregateArchivos = {
    _count: ArchivosCountAggregateOutputType | null
    _avg: ArchivosAvgAggregateOutputType | null
    _sum: ArchivosSumAggregateOutputType | null
    _min: ArchivosMinAggregateOutputType | null
    _max: ArchivosMaxAggregateOutputType | null
  }

  export type ArchivosAvgAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type ArchivosSumAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type ArchivosMinAggregateOutputType = {
    formato: string | null
    archivo: Uint8Array | null
    nombrearchivo: string | null
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type ArchivosMaxAggregateOutputType = {
    formato: string | null
    archivo: Uint8Array | null
    nombrearchivo: string | null
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type ArchivosCountAggregateOutputType = {
    formato: number
    archivo: number
    nombrearchivo: number
    id: number
    id_persona: number
    id_proyecto: number
    _all: number
  }


  export type ArchivosAvgAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type ArchivosSumAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type ArchivosMinAggregateInputType = {
    formato?: true
    archivo?: true
    nombrearchivo?: true
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type ArchivosMaxAggregateInputType = {
    formato?: true
    archivo?: true
    nombrearchivo?: true
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type ArchivosCountAggregateInputType = {
    formato?: true
    archivo?: true
    nombrearchivo?: true
    id?: true
    id_persona?: true
    id_proyecto?: true
    _all?: true
  }

  export type ArchivosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivos to aggregate.
     */
    where?: archivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivos to fetch.
     */
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archivos
    **/
    _count?: true | ArchivosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivosMaxAggregateInputType
  }

  export type GetArchivosAggregateType<T extends ArchivosAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivos[P]>
      : GetScalarType<T[P], AggregateArchivos[P]>
  }




  export type archivosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivosWhereInput
    orderBy?: archivosOrderByWithAggregationInput | archivosOrderByWithAggregationInput[]
    by: ArchivosScalarFieldEnum[] | ArchivosScalarFieldEnum
    having?: archivosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivosCountAggregateInputType | true
    _avg?: ArchivosAvgAggregateInputType
    _sum?: ArchivosSumAggregateInputType
    _min?: ArchivosMinAggregateInputType
    _max?: ArchivosMaxAggregateInputType
  }

  export type ArchivosGroupByOutputType = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id: number
    id_persona: number
    id_proyecto: number
    _count: ArchivosCountAggregateOutputType | null
    _avg: ArchivosAvgAggregateOutputType | null
    _sum: ArchivosSumAggregateOutputType | null
    _min: ArchivosMinAggregateOutputType | null
    _max: ArchivosMaxAggregateOutputType | null
  }

  type GetArchivosGroupByPayload<T extends archivosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivosGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivosGroupByOutputType[P]>
        }
      >
    >


  export type archivosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formato?: boolean
    archivo?: boolean
    nombrearchivo?: boolean
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivos"]>

  export type archivosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formato?: boolean
    archivo?: boolean
    nombrearchivo?: boolean
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivos"]>

  export type archivosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    formato?: boolean
    archivo?: boolean
    nombrearchivo?: boolean
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivos"]>

  export type archivosSelectScalar = {
    formato?: boolean
    archivo?: boolean
    nombrearchivo?: boolean
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
  }

  export type archivosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"formato" | "archivo" | "nombrearchivo" | "id" | "id_persona" | "id_proyecto", ExtArgs["result"]["archivos"]>
  export type archivosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type archivosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type archivosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $archivosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archivos"
    objects: {
      persona: Prisma.$personaPayload<ExtArgs>
      proyecto: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      formato: string
      archivo: Uint8Array
      nombrearchivo: string
      id: number
      id_persona: number
      id_proyecto: number
    }, ExtArgs["result"]["archivos"]>
    composites: {}
  }

  type archivosGetPayload<S extends boolean | null | undefined | archivosDefaultArgs> = $Result.GetResult<Prisma.$archivosPayload, S>

  type archivosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archivosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivosCountAggregateInputType | true
    }

  export interface archivosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archivos'], meta: { name: 'archivos' } }
    /**
     * Find zero or one Archivos that matches the filter.
     * @param {archivosFindUniqueArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archivosFindUniqueArgs>(args: SelectSubset<T, archivosFindUniqueArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archivosFindUniqueOrThrowArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archivosFindUniqueOrThrowArgs>(args: SelectSubset<T, archivosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosFindFirstArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archivosFindFirstArgs>(args?: SelectSubset<T, archivosFindFirstArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosFindFirstOrThrowArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archivosFindFirstOrThrowArgs>(args?: SelectSubset<T, archivosFindFirstOrThrowArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivos
     * const archivos = await prisma.archivos.findMany()
     * 
     * // Get first 10 Archivos
     * const archivos = await prisma.archivos.findMany({ take: 10 })
     * 
     * // Only select the `formato`
     * const archivosWithFormatoOnly = await prisma.archivos.findMany({ select: { formato: true } })
     * 
     */
    findMany<T extends archivosFindManyArgs>(args?: SelectSubset<T, archivosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivos.
     * @param {archivosCreateArgs} args - Arguments to create a Archivos.
     * @example
     * // Create one Archivos
     * const Archivos = await prisma.archivos.create({
     *   data: {
     *     // ... data to create a Archivos
     *   }
     * })
     * 
     */
    create<T extends archivosCreateArgs>(args: SelectSubset<T, archivosCreateArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivos.
     * @param {archivosCreateManyArgs} args - Arguments to create many Archivos.
     * @example
     * // Create many Archivos
     * const archivos = await prisma.archivos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archivosCreateManyArgs>(args?: SelectSubset<T, archivosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archivos and returns the data saved in the database.
     * @param {archivosCreateManyAndReturnArgs} args - Arguments to create many Archivos.
     * @example
     * // Create many Archivos
     * const archivos = await prisma.archivos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archivos and only return the `formato`
     * const archivosWithFormatoOnly = await prisma.archivos.createManyAndReturn({
     *   select: { formato: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends archivosCreateManyAndReturnArgs>(args?: SelectSubset<T, archivosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archivos.
     * @param {archivosDeleteArgs} args - Arguments to delete one Archivos.
     * @example
     * // Delete one Archivos
     * const Archivos = await prisma.archivos.delete({
     *   where: {
     *     // ... filter to delete one Archivos
     *   }
     * })
     * 
     */
    delete<T extends archivosDeleteArgs>(args: SelectSubset<T, archivosDeleteArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivos.
     * @param {archivosUpdateArgs} args - Arguments to update one Archivos.
     * @example
     * // Update one Archivos
     * const archivos = await prisma.archivos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archivosUpdateArgs>(args: SelectSubset<T, archivosUpdateArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivos.
     * @param {archivosDeleteManyArgs} args - Arguments to filter Archivos to delete.
     * @example
     * // Delete a few Archivos
     * const { count } = await prisma.archivos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archivosDeleteManyArgs>(args?: SelectSubset<T, archivosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivos
     * const archivos = await prisma.archivos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archivosUpdateManyArgs>(args: SelectSubset<T, archivosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos and returns the data updated in the database.
     * @param {archivosUpdateManyAndReturnArgs} args - Arguments to update many Archivos.
     * @example
     * // Update many Archivos
     * const archivos = await prisma.archivos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archivos and only return the `formato`
     * const archivosWithFormatoOnly = await prisma.archivos.updateManyAndReturn({
     *   select: { formato: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends archivosUpdateManyAndReturnArgs>(args: SelectSubset<T, archivosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archivos.
     * @param {archivosUpsertArgs} args - Arguments to update or create a Archivos.
     * @example
     * // Update or create a Archivos
     * const archivos = await prisma.archivos.upsert({
     *   create: {
     *     // ... data to create a Archivos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivos we want to update
     *   }
     * })
     */
    upsert<T extends archivosUpsertArgs>(args: SelectSubset<T, archivosUpsertArgs<ExtArgs>>): Prisma__archivosClient<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosCountArgs} args - Arguments to filter Archivos to count.
     * @example
     * // Count the number of Archivos
     * const count = await prisma.archivos.count({
     *   where: {
     *     // ... the filter for the Archivos we want to count
     *   }
     * })
    **/
    count<T extends archivosCountArgs>(
      args?: Subset<T, archivosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchivosAggregateArgs>(args: Subset<T, ArchivosAggregateArgs>): Prisma.PrismaPromise<GetArchivosAggregateType<T>>

    /**
     * Group by Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends archivosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archivosGroupByArgs['orderBy'] }
        : { orderBy?: archivosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, archivosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archivos model
   */
  readonly fields: archivosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archivos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archivosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends personaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personaDefaultArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the archivos model
   */
  interface archivosFieldRefs {
    readonly formato: FieldRef<"archivos", 'String'>
    readonly archivo: FieldRef<"archivos", 'Bytes'>
    readonly nombrearchivo: FieldRef<"archivos", 'String'>
    readonly id: FieldRef<"archivos", 'Int'>
    readonly id_persona: FieldRef<"archivos", 'Int'>
    readonly id_proyecto: FieldRef<"archivos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * archivos findUnique
   */
  export type archivosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter, which archivos to fetch.
     */
    where: archivosWhereUniqueInput
  }

  /**
   * archivos findUniqueOrThrow
   */
  export type archivosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter, which archivos to fetch.
     */
    where: archivosWhereUniqueInput
  }

  /**
   * archivos findFirst
   */
  export type archivosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter, which archivos to fetch.
     */
    where?: archivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivos to fetch.
     */
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivos.
     */
    cursor?: archivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivos.
     */
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }

  /**
   * archivos findFirstOrThrow
   */
  export type archivosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter, which archivos to fetch.
     */
    where?: archivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivos to fetch.
     */
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivos.
     */
    cursor?: archivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivos.
     */
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }

  /**
   * archivos findMany
   */
  export type archivosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter, which archivos to fetch.
     */
    where?: archivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivos to fetch.
     */
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archivos.
     */
    cursor?: archivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivos.
     */
    skip?: number
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }

  /**
   * archivos create
   */
  export type archivosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * The data needed to create a archivos.
     */
    data: XOR<archivosCreateInput, archivosUncheckedCreateInput>
  }

  /**
   * archivos createMany
   */
  export type archivosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archivos.
     */
    data: archivosCreateManyInput | archivosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archivos createManyAndReturn
   */
  export type archivosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * The data used to create many archivos.
     */
    data: archivosCreateManyInput | archivosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * archivos update
   */
  export type archivosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * The data needed to update a archivos.
     */
    data: XOR<archivosUpdateInput, archivosUncheckedUpdateInput>
    /**
     * Choose, which archivos to update.
     */
    where: archivosWhereUniqueInput
  }

  /**
   * archivos updateMany
   */
  export type archivosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archivos.
     */
    data: XOR<archivosUpdateManyMutationInput, archivosUncheckedUpdateManyInput>
    /**
     * Filter which archivos to update
     */
    where?: archivosWhereInput
    /**
     * Limit how many archivos to update.
     */
    limit?: number
  }

  /**
   * archivos updateManyAndReturn
   */
  export type archivosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * The data used to update archivos.
     */
    data: XOR<archivosUpdateManyMutationInput, archivosUncheckedUpdateManyInput>
    /**
     * Filter which archivos to update
     */
    where?: archivosWhereInput
    /**
     * Limit how many archivos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * archivos upsert
   */
  export type archivosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * The filter to search for the archivos to update in case it exists.
     */
    where: archivosWhereUniqueInput
    /**
     * In case the archivos found by the `where` argument doesn't exist, create a new archivos with this data.
     */
    create: XOR<archivosCreateInput, archivosUncheckedCreateInput>
    /**
     * In case the archivos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archivosUpdateInput, archivosUncheckedUpdateInput>
  }

  /**
   * archivos delete
   */
  export type archivosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    /**
     * Filter which archivos to delete.
     */
    where: archivosWhereUniqueInput
  }

  /**
   * archivos deleteMany
   */
  export type archivosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivos to delete
     */
    where?: archivosWhereInput
    /**
     * Limit how many archivos to delete.
     */
    limit?: number
  }

  /**
   * archivos without action
   */
  export type archivosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
  }


  /**
   * Model mensajes
   */

  export type AggregateMensajes = {
    _count: MensajesCountAggregateOutputType | null
    _avg: MensajesAvgAggregateOutputType | null
    _sum: MensajesSumAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  export type MensajesAvgAggregateOutputType = {
    id_chat: number | null
    id_persona: number | null
    id: number | null
  }

  export type MensajesSumAggregateOutputType = {
    id_chat: number | null
    id_persona: number | null
    id: number | null
  }

  export type MensajesMinAggregateOutputType = {
    id_chat: number | null
    id_persona: number | null
    mensaje: string | null
    estado: string | null
    id: number | null
  }

  export type MensajesMaxAggregateOutputType = {
    id_chat: number | null
    id_persona: number | null
    mensaje: string | null
    estado: string | null
    id: number | null
  }

  export type MensajesCountAggregateOutputType = {
    id_chat: number
    id_persona: number
    mensaje: number
    estado: number
    id: number
    _all: number
  }


  export type MensajesAvgAggregateInputType = {
    id_chat?: true
    id_persona?: true
    id?: true
  }

  export type MensajesSumAggregateInputType = {
    id_chat?: true
    id_persona?: true
    id?: true
  }

  export type MensajesMinAggregateInputType = {
    id_chat?: true
    id_persona?: true
    mensaje?: true
    estado?: true
    id?: true
  }

  export type MensajesMaxAggregateInputType = {
    id_chat?: true
    id_persona?: true
    mensaje?: true
    estado?: true
    id?: true
  }

  export type MensajesCountAggregateInputType = {
    id_chat?: true
    id_persona?: true
    mensaje?: true
    estado?: true
    id?: true
    _all?: true
  }

  export type MensajesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to aggregate.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensajes
    **/
    _count?: true | MensajesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajesMaxAggregateInputType
  }

  export type GetMensajesAggregateType<T extends MensajesAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajes[P]>
      : GetScalarType<T[P], AggregateMensajes[P]>
  }




  export type mensajesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithAggregationInput | mensajesOrderByWithAggregationInput[]
    by: MensajesScalarFieldEnum[] | MensajesScalarFieldEnum
    having?: mensajesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajesCountAggregateInputType | true
    _avg?: MensajesAvgAggregateInputType
    _sum?: MensajesSumAggregateInputType
    _min?: MensajesMinAggregateInputType
    _max?: MensajesMaxAggregateInputType
  }

  export type MensajesGroupByOutputType = {
    id_chat: number
    id_persona: number
    mensaje: string
    estado: string
    id: number
    _count: MensajesCountAggregateOutputType | null
    _avg: MensajesAvgAggregateOutputType | null
    _sum: MensajesSumAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  type GetMensajesGroupByPayload<T extends mensajesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajesGroupByOutputType[P]>
            : GetScalarType<T[P], MensajesGroupByOutputType[P]>
        }
      >
    >


  export type mensajesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chat?: boolean
    id_persona?: boolean
    mensaje?: boolean
    estado?: boolean
    id?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chat?: boolean
    id_persona?: boolean
    mensaje?: boolean
    estado?: boolean
    id?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_chat?: boolean
    id_persona?: boolean
    mensaje?: boolean
    estado?: boolean
    id?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectScalar = {
    id_chat?: boolean
    id_persona?: boolean
    mensaje?: boolean
    estado?: boolean
    id?: boolean
  }

  export type mensajesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_chat" | "id_persona" | "mensaje" | "estado" | "id", ExtArgs["result"]["mensajes"]>
  export type mensajesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type mensajesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type mensajesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }

  export type $mensajesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensajes"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>
      persona: Prisma.$personaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_chat: number
      id_persona: number
      mensaje: string
      estado: string
      id: number
    }, ExtArgs["result"]["mensajes"]>
    composites: {}
  }

  type mensajesGetPayload<S extends boolean | null | undefined | mensajesDefaultArgs> = $Result.GetResult<Prisma.$mensajesPayload, S>

  type mensajesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mensajesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajesCountAggregateInputType | true
    }

  export interface mensajesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensajes'], meta: { name: 'mensajes' } }
    /**
     * Find zero or one Mensajes that matches the filter.
     * @param {mensajesFindUniqueArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensajesFindUniqueArgs>(args: SelectSubset<T, mensajesFindUniqueArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensajes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mensajesFindUniqueOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensajesFindUniqueOrThrowArgs>(args: SelectSubset<T, mensajesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensajesFindFirstArgs>(args?: SelectSubset<T, mensajesFindFirstArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensajesFindFirstOrThrowArgs>(args?: SelectSubset<T, mensajesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensajes.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensajes.findMany({ take: 10 })
     * 
     * // Only select the `id_chat`
     * const mensajesWithId_chatOnly = await prisma.mensajes.findMany({ select: { id_chat: true } })
     * 
     */
    findMany<T extends mensajesFindManyArgs>(args?: SelectSubset<T, mensajesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensajes.
     * @param {mensajesCreateArgs} args - Arguments to create a Mensajes.
     * @example
     * // Create one Mensajes
     * const Mensajes = await prisma.mensajes.create({
     *   data: {
     *     // ... data to create a Mensajes
     *   }
     * })
     * 
     */
    create<T extends mensajesCreateArgs>(args: SelectSubset<T, mensajesCreateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {mensajesCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensajes = await prisma.mensajes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensajesCreateManyArgs>(args?: SelectSubset<T, mensajesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {mensajesCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensajes = await prisma.mensajes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id_chat`
     * const mensajesWithId_chatOnly = await prisma.mensajes.createManyAndReturn({
     *   select: { id_chat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mensajesCreateManyAndReturnArgs>(args?: SelectSubset<T, mensajesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensajes.
     * @param {mensajesDeleteArgs} args - Arguments to delete one Mensajes.
     * @example
     * // Delete one Mensajes
     * const Mensajes = await prisma.mensajes.delete({
     *   where: {
     *     // ... filter to delete one Mensajes
     *   }
     * })
     * 
     */
    delete<T extends mensajesDeleteArgs>(args: SelectSubset<T, mensajesDeleteArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensajes.
     * @param {mensajesUpdateArgs} args - Arguments to update one Mensajes.
     * @example
     * // Update one Mensajes
     * const mensajes = await prisma.mensajes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensajesUpdateArgs>(args: SelectSubset<T, mensajesUpdateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {mensajesDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensajes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensajesDeleteManyArgs>(args?: SelectSubset<T, mensajesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensajes = await prisma.mensajes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensajesUpdateManyArgs>(args: SelectSubset<T, mensajesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {mensajesUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensajes = await prisma.mensajes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id_chat`
     * const mensajesWithId_chatOnly = await prisma.mensajes.updateManyAndReturn({
     *   select: { id_chat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mensajesUpdateManyAndReturnArgs>(args: SelectSubset<T, mensajesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensajes.
     * @param {mensajesUpsertArgs} args - Arguments to update or create a Mensajes.
     * @example
     * // Update or create a Mensajes
     * const mensajes = await prisma.mensajes.upsert({
     *   create: {
     *     // ... data to create a Mensajes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensajes we want to update
     *   }
     * })
     */
    upsert<T extends mensajesUpsertArgs>(args: SelectSubset<T, mensajesUpsertArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensajes.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends mensajesCountArgs>(
      args?: Subset<T, mensajesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajesAggregateArgs>(args: Subset<T, MensajesAggregateArgs>): Prisma.PrismaPromise<GetMensajesAggregateType<T>>

    /**
     * Group by Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mensajesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensajesGroupByArgs['orderBy'] }
        : { orderBy?: mensajesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mensajesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensajes model
   */
  readonly fields: mensajesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensajes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensajesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatDefaultArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends personaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personaDefaultArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mensajes model
   */
  interface mensajesFieldRefs {
    readonly id_chat: FieldRef<"mensajes", 'Int'>
    readonly id_persona: FieldRef<"mensajes", 'Int'>
    readonly mensaje: FieldRef<"mensajes", 'String'>
    readonly estado: FieldRef<"mensajes", 'String'>
    readonly id: FieldRef<"mensajes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mensajes findUnique
   */
  export type mensajesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findUniqueOrThrow
   */
  export type mensajesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findFirst
   */
  export type mensajesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findFirstOrThrow
   */
  export type mensajesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findMany
   */
  export type mensajesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes create
   */
  export type mensajesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to create a mensajes.
     */
    data: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
  }

  /**
   * mensajes createMany
   */
  export type mensajesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensajes.
     */
    data: mensajesCreateManyInput | mensajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensajes createManyAndReturn
   */
  export type mensajesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * The data used to create many mensajes.
     */
    data: mensajesCreateManyInput | mensajesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajes update
   */
  export type mensajesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to update a mensajes.
     */
    data: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
    /**
     * Choose, which mensajes to update.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes updateMany
   */
  export type mensajesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensajes.
     */
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyInput>
    /**
     * Filter which mensajes to update
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to update.
     */
    limit?: number
  }

  /**
   * mensajes updateManyAndReturn
   */
  export type mensajesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * The data used to update mensajes.
     */
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyInput>
    /**
     * Filter which mensajes to update
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajes upsert
   */
  export type mensajesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The filter to search for the mensajes to update in case it exists.
     */
    where: mensajesWhereUniqueInput
    /**
     * In case the mensajes found by the `where` argument doesn't exist, create a new mensajes with this data.
     */
    create: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
    /**
     * In case the mensajes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
  }

  /**
   * mensajes delete
   */
  export type mensajesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter which mensajes to delete.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes deleteMany
   */
  export type mensajesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to delete
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to delete.
     */
    limit?: number
  }

  /**
   * mensajes without action
   */
  export type mensajesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
  }


  /**
   * Model tareas
   */

  export type AggregateTareas = {
    _count: TareasCountAggregateOutputType | null
    _avg: TareasAvgAggregateOutputType | null
    _sum: TareasSumAggregateOutputType | null
    _min: TareasMinAggregateOutputType | null
    _max: TareasMaxAggregateOutputType | null
  }

  export type TareasAvgAggregateOutputType = {
    id: number | null
    id_proyecto: number | null
    id_persona: number | null
  }

  export type TareasSumAggregateOutputType = {
    id: number | null
    id_proyecto: number | null
    id_persona: number | null
  }

  export type TareasMinAggregateOutputType = {
    nombre: string | null
    estado: string | null
    id: number | null
    id_proyecto: number | null
    id_persona: number | null
    limite: string | null
  }

  export type TareasMaxAggregateOutputType = {
    nombre: string | null
    estado: string | null
    id: number | null
    id_proyecto: number | null
    id_persona: number | null
    limite: string | null
  }

  export type TareasCountAggregateOutputType = {
    nombre: number
    estado: number
    id: number
    id_proyecto: number
    id_persona: number
    limite: number
    _all: number
  }


  export type TareasAvgAggregateInputType = {
    id?: true
    id_proyecto?: true
    id_persona?: true
  }

  export type TareasSumAggregateInputType = {
    id?: true
    id_proyecto?: true
    id_persona?: true
  }

  export type TareasMinAggregateInputType = {
    nombre?: true
    estado?: true
    id?: true
    id_proyecto?: true
    id_persona?: true
    limite?: true
  }

  export type TareasMaxAggregateInputType = {
    nombre?: true
    estado?: true
    id?: true
    id_proyecto?: true
    id_persona?: true
    limite?: true
  }

  export type TareasCountAggregateInputType = {
    nombre?: true
    estado?: true
    id?: true
    id_proyecto?: true
    id_persona?: true
    limite?: true
    _all?: true
  }

  export type TareasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tareas to aggregate.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tareas
    **/
    _count?: true | TareasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TareasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TareasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TareasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TareasMaxAggregateInputType
  }

  export type GetTareasAggregateType<T extends TareasAggregateArgs> = {
        [P in keyof T & keyof AggregateTareas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTareas[P]>
      : GetScalarType<T[P], AggregateTareas[P]>
  }




  export type tareasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithAggregationInput | tareasOrderByWithAggregationInput[]
    by: TareasScalarFieldEnum[] | TareasScalarFieldEnum
    having?: tareasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TareasCountAggregateInputType | true
    _avg?: TareasAvgAggregateInputType
    _sum?: TareasSumAggregateInputType
    _min?: TareasMinAggregateInputType
    _max?: TareasMaxAggregateInputType
  }

  export type TareasGroupByOutputType = {
    nombre: string
    estado: string
    id: number
    id_proyecto: number
    id_persona: number
    limite: string
    _count: TareasCountAggregateOutputType | null
    _avg: TareasAvgAggregateOutputType | null
    _sum: TareasSumAggregateOutputType | null
    _min: TareasMinAggregateOutputType | null
    _max: TareasMaxAggregateOutputType | null
  }

  type GetTareasGroupByPayload<T extends tareasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TareasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TareasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TareasGroupByOutputType[P]>
            : GetScalarType<T[P], TareasGroupByOutputType[P]>
        }
      >
    >


  export type tareasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    estado?: boolean
    id?: boolean
    id_proyecto?: boolean
    id_persona?: boolean
    limite?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    estado?: boolean
    id?: boolean
    id_proyecto?: boolean
    id_persona?: boolean
    limite?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    estado?: boolean
    id?: boolean
    id_proyecto?: boolean
    id_persona?: boolean
    limite?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tareas"]>

  export type tareasSelectScalar = {
    nombre?: boolean
    estado?: boolean
    id?: boolean
    id_proyecto?: boolean
    id_persona?: boolean
    limite?: boolean
  }

  export type tareasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nombre" | "estado" | "id" | "id_proyecto" | "id_persona" | "limite", ExtArgs["result"]["tareas"]>
  export type tareasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type tareasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type tareasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }

  export type $tareasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tareas"
    objects: {
      proyecto: Prisma.$proyectoPayload<ExtArgs>
      persona: Prisma.$personaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      estado: string
      id: number
      id_proyecto: number
      id_persona: number
      limite: string
    }, ExtArgs["result"]["tareas"]>
    composites: {}
  }

  type tareasGetPayload<S extends boolean | null | undefined | tareasDefaultArgs> = $Result.GetResult<Prisma.$tareasPayload, S>

  type tareasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tareasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TareasCountAggregateInputType | true
    }

  export interface tareasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tareas'], meta: { name: 'tareas' } }
    /**
     * Find zero or one Tareas that matches the filter.
     * @param {tareasFindUniqueArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tareasFindUniqueArgs>(args: SelectSubset<T, tareasFindUniqueArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tareas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tareasFindUniqueOrThrowArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tareasFindUniqueOrThrowArgs>(args: SelectSubset<T, tareasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindFirstArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tareasFindFirstArgs>(args?: SelectSubset<T, tareasFindFirstArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tareas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindFirstOrThrowArgs} args - Arguments to find a Tareas
     * @example
     * // Get one Tareas
     * const tareas = await prisma.tareas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tareasFindFirstOrThrowArgs>(args?: SelectSubset<T, tareasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tareas
     * const tareas = await prisma.tareas.findMany()
     * 
     * // Get first 10 Tareas
     * const tareas = await prisma.tareas.findMany({ take: 10 })
     * 
     * // Only select the `nombre`
     * const tareasWithNombreOnly = await prisma.tareas.findMany({ select: { nombre: true } })
     * 
     */
    findMany<T extends tareasFindManyArgs>(args?: SelectSubset<T, tareasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tareas.
     * @param {tareasCreateArgs} args - Arguments to create a Tareas.
     * @example
     * // Create one Tareas
     * const Tareas = await prisma.tareas.create({
     *   data: {
     *     // ... data to create a Tareas
     *   }
     * })
     * 
     */
    create<T extends tareasCreateArgs>(args: SelectSubset<T, tareasCreateArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tareas.
     * @param {tareasCreateManyArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tareas = await prisma.tareas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tareasCreateManyArgs>(args?: SelectSubset<T, tareasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tareas and returns the data saved in the database.
     * @param {tareasCreateManyAndReturnArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tareas = await prisma.tareas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tareas and only return the `nombre`
     * const tareasWithNombreOnly = await prisma.tareas.createManyAndReturn({
     *   select: { nombre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tareasCreateManyAndReturnArgs>(args?: SelectSubset<T, tareasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tareas.
     * @param {tareasDeleteArgs} args - Arguments to delete one Tareas.
     * @example
     * // Delete one Tareas
     * const Tareas = await prisma.tareas.delete({
     *   where: {
     *     // ... filter to delete one Tareas
     *   }
     * })
     * 
     */
    delete<T extends tareasDeleteArgs>(args: SelectSubset<T, tareasDeleteArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tareas.
     * @param {tareasUpdateArgs} args - Arguments to update one Tareas.
     * @example
     * // Update one Tareas
     * const tareas = await prisma.tareas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tareasUpdateArgs>(args: SelectSubset<T, tareasUpdateArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tareas.
     * @param {tareasDeleteManyArgs} args - Arguments to filter Tareas to delete.
     * @example
     * // Delete a few Tareas
     * const { count } = await prisma.tareas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tareasDeleteManyArgs>(args?: SelectSubset<T, tareasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tareas
     * const tareas = await prisma.tareas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tareasUpdateManyArgs>(args: SelectSubset<T, tareasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas and returns the data updated in the database.
     * @param {tareasUpdateManyAndReturnArgs} args - Arguments to update many Tareas.
     * @example
     * // Update many Tareas
     * const tareas = await prisma.tareas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tareas and only return the `nombre`
     * const tareasWithNombreOnly = await prisma.tareas.updateManyAndReturn({
     *   select: { nombre: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tareasUpdateManyAndReturnArgs>(args: SelectSubset<T, tareasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tareas.
     * @param {tareasUpsertArgs} args - Arguments to update or create a Tareas.
     * @example
     * // Update or create a Tareas
     * const tareas = await prisma.tareas.upsert({
     *   create: {
     *     // ... data to create a Tareas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tareas we want to update
     *   }
     * })
     */
    upsert<T extends tareasUpsertArgs>(args: SelectSubset<T, tareasUpsertArgs<ExtArgs>>): Prisma__tareasClient<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasCountArgs} args - Arguments to filter Tareas to count.
     * @example
     * // Count the number of Tareas
     * const count = await prisma.tareas.count({
     *   where: {
     *     // ... the filter for the Tareas we want to count
     *   }
     * })
    **/
    count<T extends tareasCountArgs>(
      args?: Subset<T, tareasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TareasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TareasAggregateArgs>(args: Subset<T, TareasAggregateArgs>): Prisma.PrismaPromise<GetTareasAggregateType<T>>

    /**
     * Group by Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tareasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tareasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tareasGroupByArgs['orderBy'] }
        : { orderBy?: tareasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tareasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTareasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tareas model
   */
  readonly fields: tareasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tareas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tareasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends personaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personaDefaultArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tareas model
   */
  interface tareasFieldRefs {
    readonly nombre: FieldRef<"tareas", 'String'>
    readonly estado: FieldRef<"tareas", 'String'>
    readonly id: FieldRef<"tareas", 'Int'>
    readonly id_proyecto: FieldRef<"tareas", 'Int'>
    readonly id_persona: FieldRef<"tareas", 'Int'>
    readonly limite: FieldRef<"tareas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tareas findUnique
   */
  export type tareasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas findUniqueOrThrow
   */
  export type tareasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas findFirst
   */
  export type tareasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tareas.
     */
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas findFirstOrThrow
   */
  export type tareasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tareas.
     */
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas findMany
   */
  export type tareasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter, which tareas to fetch.
     */
    where?: tareasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tareas to fetch.
     */
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tareas.
     */
    cursor?: tareasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tareas.
     */
    skip?: number
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * tareas create
   */
  export type tareasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The data needed to create a tareas.
     */
    data: XOR<tareasCreateInput, tareasUncheckedCreateInput>
  }

  /**
   * tareas createMany
   */
  export type tareasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tareas.
     */
    data: tareasCreateManyInput | tareasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tareas createManyAndReturn
   */
  export type tareasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * The data used to create many tareas.
     */
    data: tareasCreateManyInput | tareasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tareas update
   */
  export type tareasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The data needed to update a tareas.
     */
    data: XOR<tareasUpdateInput, tareasUncheckedUpdateInput>
    /**
     * Choose, which tareas to update.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas updateMany
   */
  export type tareasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tareas.
     */
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyInput>
    /**
     * Filter which tareas to update
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to update.
     */
    limit?: number
  }

  /**
   * tareas updateManyAndReturn
   */
  export type tareasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * The data used to update tareas.
     */
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyInput>
    /**
     * Filter which tareas to update
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tareas upsert
   */
  export type tareasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * The filter to search for the tareas to update in case it exists.
     */
    where: tareasWhereUniqueInput
    /**
     * In case the tareas found by the `where` argument doesn't exist, create a new tareas with this data.
     */
    create: XOR<tareasCreateInput, tareasUncheckedCreateInput>
    /**
     * In case the tareas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tareasUpdateInput, tareasUncheckedUpdateInput>
  }

  /**
   * tareas delete
   */
  export type tareasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    /**
     * Filter which tareas to delete.
     */
    where: tareasWhereUniqueInput
  }

  /**
   * tareas deleteMany
   */
  export type tareasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tareas to delete
     */
    where?: tareasWhereInput
    /**
     * Limit how many tareas to delete.
     */
    limit?: number
  }

  /**
   * tareas without action
   */
  export type tareasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
  }


  /**
   * Model personalizaciones
   */

  export type AggregatePersonalizaciones = {
    _count: PersonalizacionesCountAggregateOutputType | null
    _avg: PersonalizacionesAvgAggregateOutputType | null
    _sum: PersonalizacionesSumAggregateOutputType | null
    _min: PersonalizacionesMinAggregateOutputType | null
    _max: PersonalizacionesMaxAggregateOutputType | null
  }

  export type PersonalizacionesAvgAggregateOutputType = {
    id: number | null
    id_persona: number | null
  }

  export type PersonalizacionesSumAggregateOutputType = {
    id: number | null
    id_persona: number | null
  }

  export type PersonalizacionesMinAggregateOutputType = {
    id: number | null
    id_persona: number | null
    codigo_a_insertar: string | null
  }

  export type PersonalizacionesMaxAggregateOutputType = {
    id: number | null
    id_persona: number | null
    codigo_a_insertar: string | null
  }

  export type PersonalizacionesCountAggregateOutputType = {
    id: number
    id_persona: number
    codigo_a_insertar: number
    _all: number
  }


  export type PersonalizacionesAvgAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type PersonalizacionesSumAggregateInputType = {
    id?: true
    id_persona?: true
  }

  export type PersonalizacionesMinAggregateInputType = {
    id?: true
    id_persona?: true
    codigo_a_insertar?: true
  }

  export type PersonalizacionesMaxAggregateInputType = {
    id?: true
    id_persona?: true
    codigo_a_insertar?: true
  }

  export type PersonalizacionesCountAggregateInputType = {
    id?: true
    id_persona?: true
    codigo_a_insertar?: true
    _all?: true
  }

  export type PersonalizacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personalizaciones to aggregate.
     */
    where?: personalizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personalizaciones to fetch.
     */
    orderBy?: personalizacionesOrderByWithRelationInput | personalizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personalizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personalizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personalizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personalizaciones
    **/
    _count?: true | PersonalizacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalizacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalizacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalizacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalizacionesMaxAggregateInputType
  }

  export type GetPersonalizacionesAggregateType<T extends PersonalizacionesAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalizaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalizaciones[P]>
      : GetScalarType<T[P], AggregatePersonalizaciones[P]>
  }




  export type personalizacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personalizacionesWhereInput
    orderBy?: personalizacionesOrderByWithAggregationInput | personalizacionesOrderByWithAggregationInput[]
    by: PersonalizacionesScalarFieldEnum[] | PersonalizacionesScalarFieldEnum
    having?: personalizacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalizacionesCountAggregateInputType | true
    _avg?: PersonalizacionesAvgAggregateInputType
    _sum?: PersonalizacionesSumAggregateInputType
    _min?: PersonalizacionesMinAggregateInputType
    _max?: PersonalizacionesMaxAggregateInputType
  }

  export type PersonalizacionesGroupByOutputType = {
    id: number
    id_persona: number
    codigo_a_insertar: string
    _count: PersonalizacionesCountAggregateOutputType | null
    _avg: PersonalizacionesAvgAggregateOutputType | null
    _sum: PersonalizacionesSumAggregateOutputType | null
    _min: PersonalizacionesMinAggregateOutputType | null
    _max: PersonalizacionesMaxAggregateOutputType | null
  }

  type GetPersonalizacionesGroupByPayload<T extends personalizacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalizacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalizacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalizacionesGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalizacionesGroupByOutputType[P]>
        }
      >
    >


  export type personalizacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    codigo_a_insertar?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalizaciones"]>

  export type personalizacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    codigo_a_insertar?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalizaciones"]>

  export type personalizacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    codigo_a_insertar?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalizaciones"]>

  export type personalizacionesSelectScalar = {
    id?: boolean
    id_persona?: boolean
    codigo_a_insertar?: boolean
  }

  export type personalizacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_persona" | "codigo_a_insertar", ExtArgs["result"]["personalizaciones"]>
  export type personalizacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type personalizacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }
  export type personalizacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
  }

  export type $personalizacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personalizaciones"
    objects: {
      persona: Prisma.$personaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_persona: number
      codigo_a_insertar: string
    }, ExtArgs["result"]["personalizaciones"]>
    composites: {}
  }

  type personalizacionesGetPayload<S extends boolean | null | undefined | personalizacionesDefaultArgs> = $Result.GetResult<Prisma.$personalizacionesPayload, S>

  type personalizacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personalizacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalizacionesCountAggregateInputType | true
    }

  export interface personalizacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personalizaciones'], meta: { name: 'personalizaciones' } }
    /**
     * Find zero or one Personalizaciones that matches the filter.
     * @param {personalizacionesFindUniqueArgs} args - Arguments to find a Personalizaciones
     * @example
     * // Get one Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personalizacionesFindUniqueArgs>(args: SelectSubset<T, personalizacionesFindUniqueArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personalizaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personalizacionesFindUniqueOrThrowArgs} args - Arguments to find a Personalizaciones
     * @example
     * // Get one Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personalizacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, personalizacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personalizaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesFindFirstArgs} args - Arguments to find a Personalizaciones
     * @example
     * // Get one Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personalizacionesFindFirstArgs>(args?: SelectSubset<T, personalizacionesFindFirstArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personalizaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesFindFirstOrThrowArgs} args - Arguments to find a Personalizaciones
     * @example
     * // Get one Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personalizacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, personalizacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personalizaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findMany()
     * 
     * // Get first 10 Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalizacionesWithIdOnly = await prisma.personalizaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personalizacionesFindManyArgs>(args?: SelectSubset<T, personalizacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personalizaciones.
     * @param {personalizacionesCreateArgs} args - Arguments to create a Personalizaciones.
     * @example
     * // Create one Personalizaciones
     * const Personalizaciones = await prisma.personalizaciones.create({
     *   data: {
     *     // ... data to create a Personalizaciones
     *   }
     * })
     * 
     */
    create<T extends personalizacionesCreateArgs>(args: SelectSubset<T, personalizacionesCreateArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personalizaciones.
     * @param {personalizacionesCreateManyArgs} args - Arguments to create many Personalizaciones.
     * @example
     * // Create many Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personalizacionesCreateManyArgs>(args?: SelectSubset<T, personalizacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personalizaciones and returns the data saved in the database.
     * @param {personalizacionesCreateManyAndReturnArgs} args - Arguments to create many Personalizaciones.
     * @example
     * // Create many Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personalizaciones and only return the `id`
     * const personalizacionesWithIdOnly = await prisma.personalizaciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personalizacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, personalizacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personalizaciones.
     * @param {personalizacionesDeleteArgs} args - Arguments to delete one Personalizaciones.
     * @example
     * // Delete one Personalizaciones
     * const Personalizaciones = await prisma.personalizaciones.delete({
     *   where: {
     *     // ... filter to delete one Personalizaciones
     *   }
     * })
     * 
     */
    delete<T extends personalizacionesDeleteArgs>(args: SelectSubset<T, personalizacionesDeleteArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personalizaciones.
     * @param {personalizacionesUpdateArgs} args - Arguments to update one Personalizaciones.
     * @example
     * // Update one Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personalizacionesUpdateArgs>(args: SelectSubset<T, personalizacionesUpdateArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personalizaciones.
     * @param {personalizacionesDeleteManyArgs} args - Arguments to filter Personalizaciones to delete.
     * @example
     * // Delete a few Personalizaciones
     * const { count } = await prisma.personalizaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personalizacionesDeleteManyArgs>(args?: SelectSubset<T, personalizacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personalizacionesUpdateManyArgs>(args: SelectSubset<T, personalizacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personalizaciones and returns the data updated in the database.
     * @param {personalizacionesUpdateManyAndReturnArgs} args - Arguments to update many Personalizaciones.
     * @example
     * // Update many Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personalizaciones and only return the `id`
     * const personalizacionesWithIdOnly = await prisma.personalizaciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends personalizacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, personalizacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personalizaciones.
     * @param {personalizacionesUpsertArgs} args - Arguments to update or create a Personalizaciones.
     * @example
     * // Update or create a Personalizaciones
     * const personalizaciones = await prisma.personalizaciones.upsert({
     *   create: {
     *     // ... data to create a Personalizaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personalizaciones we want to update
     *   }
     * })
     */
    upsert<T extends personalizacionesUpsertArgs>(args: SelectSubset<T, personalizacionesUpsertArgs<ExtArgs>>): Prisma__personalizacionesClient<$Result.GetResult<Prisma.$personalizacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personalizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesCountArgs} args - Arguments to filter Personalizaciones to count.
     * @example
     * // Count the number of Personalizaciones
     * const count = await prisma.personalizaciones.count({
     *   where: {
     *     // ... the filter for the Personalizaciones we want to count
     *   }
     * })
    **/
    count<T extends personalizacionesCountArgs>(
      args?: Subset<T, personalizacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalizacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personalizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalizacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalizacionesAggregateArgs>(args: Subset<T, PersonalizacionesAggregateArgs>): Prisma.PrismaPromise<GetPersonalizacionesAggregateType<T>>

    /**
     * Group by Personalizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personalizacionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personalizacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personalizacionesGroupByArgs['orderBy'] }
        : { orderBy?: personalizacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personalizacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalizacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personalizaciones model
   */
  readonly fields: personalizacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personalizaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personalizacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends personaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personaDefaultArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the personalizaciones model
   */
  interface personalizacionesFieldRefs {
    readonly id: FieldRef<"personalizaciones", 'Int'>
    readonly id_persona: FieldRef<"personalizaciones", 'Int'>
    readonly codigo_a_insertar: FieldRef<"personalizaciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * personalizaciones findUnique
   */
  export type personalizacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter, which personalizaciones to fetch.
     */
    where: personalizacionesWhereUniqueInput
  }

  /**
   * personalizaciones findUniqueOrThrow
   */
  export type personalizacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter, which personalizaciones to fetch.
     */
    where: personalizacionesWhereUniqueInput
  }

  /**
   * personalizaciones findFirst
   */
  export type personalizacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter, which personalizaciones to fetch.
     */
    where?: personalizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personalizaciones to fetch.
     */
    orderBy?: personalizacionesOrderByWithRelationInput | personalizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personalizaciones.
     */
    cursor?: personalizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personalizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personalizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personalizaciones.
     */
    distinct?: PersonalizacionesScalarFieldEnum | PersonalizacionesScalarFieldEnum[]
  }

  /**
   * personalizaciones findFirstOrThrow
   */
  export type personalizacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter, which personalizaciones to fetch.
     */
    where?: personalizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personalizaciones to fetch.
     */
    orderBy?: personalizacionesOrderByWithRelationInput | personalizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personalizaciones.
     */
    cursor?: personalizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personalizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personalizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personalizaciones.
     */
    distinct?: PersonalizacionesScalarFieldEnum | PersonalizacionesScalarFieldEnum[]
  }

  /**
   * personalizaciones findMany
   */
  export type personalizacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter, which personalizaciones to fetch.
     */
    where?: personalizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personalizaciones to fetch.
     */
    orderBy?: personalizacionesOrderByWithRelationInput | personalizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personalizaciones.
     */
    cursor?: personalizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personalizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personalizaciones.
     */
    skip?: number
    distinct?: PersonalizacionesScalarFieldEnum | PersonalizacionesScalarFieldEnum[]
  }

  /**
   * personalizaciones create
   */
  export type personalizacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a personalizaciones.
     */
    data: XOR<personalizacionesCreateInput, personalizacionesUncheckedCreateInput>
  }

  /**
   * personalizaciones createMany
   */
  export type personalizacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personalizaciones.
     */
    data: personalizacionesCreateManyInput | personalizacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personalizaciones createManyAndReturn
   */
  export type personalizacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * The data used to create many personalizaciones.
     */
    data: personalizacionesCreateManyInput | personalizacionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * personalizaciones update
   */
  export type personalizacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a personalizaciones.
     */
    data: XOR<personalizacionesUpdateInput, personalizacionesUncheckedUpdateInput>
    /**
     * Choose, which personalizaciones to update.
     */
    where: personalizacionesWhereUniqueInput
  }

  /**
   * personalizaciones updateMany
   */
  export type personalizacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personalizaciones.
     */
    data: XOR<personalizacionesUpdateManyMutationInput, personalizacionesUncheckedUpdateManyInput>
    /**
     * Filter which personalizaciones to update
     */
    where?: personalizacionesWhereInput
    /**
     * Limit how many personalizaciones to update.
     */
    limit?: number
  }

  /**
   * personalizaciones updateManyAndReturn
   */
  export type personalizacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * The data used to update personalizaciones.
     */
    data: XOR<personalizacionesUpdateManyMutationInput, personalizacionesUncheckedUpdateManyInput>
    /**
     * Filter which personalizaciones to update
     */
    where?: personalizacionesWhereInput
    /**
     * Limit how many personalizaciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * personalizaciones upsert
   */
  export type personalizacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the personalizaciones to update in case it exists.
     */
    where: personalizacionesWhereUniqueInput
    /**
     * In case the personalizaciones found by the `where` argument doesn't exist, create a new personalizaciones with this data.
     */
    create: XOR<personalizacionesCreateInput, personalizacionesUncheckedCreateInput>
    /**
     * In case the personalizaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personalizacionesUpdateInput, personalizacionesUncheckedUpdateInput>
  }

  /**
   * personalizaciones delete
   */
  export type personalizacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
    /**
     * Filter which personalizaciones to delete.
     */
    where: personalizacionesWhereUniqueInput
  }

  /**
   * personalizaciones deleteMany
   */
  export type personalizacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personalizaciones to delete
     */
    where?: personalizacionesWhereInput
    /**
     * Limit how many personalizaciones to delete.
     */
    limit?: number
  }

  /**
   * personalizaciones without action
   */
  export type personalizacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personalizaciones
     */
    select?: personalizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personalizaciones
     */
    omit?: personalizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personalizacionesInclude<ExtArgs> | null
  }


  /**
   * Model tiene
   */

  export type AggregateTiene = {
    _count: TieneCountAggregateOutputType | null
    _avg: TieneAvgAggregateOutputType | null
    _sum: TieneSumAggregateOutputType | null
    _min: TieneMinAggregateOutputType | null
    _max: TieneMaxAggregateOutputType | null
  }

  export type TieneAvgAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type TieneSumAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type TieneMinAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type TieneMaxAggregateOutputType = {
    id: number | null
    id_persona: number | null
    id_proyecto: number | null
  }

  export type TieneCountAggregateOutputType = {
    id: number
    id_persona: number
    id_proyecto: number
    _all: number
  }


  export type TieneAvgAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type TieneSumAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type TieneMinAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type TieneMaxAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
  }

  export type TieneCountAggregateInputType = {
    id?: true
    id_persona?: true
    id_proyecto?: true
    _all?: true
  }

  export type TieneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiene to aggregate.
     */
    where?: tieneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tienes to fetch.
     */
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tieneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tienes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tienes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tienes
    **/
    _count?: true | TieneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TieneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TieneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TieneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TieneMaxAggregateInputType
  }

  export type GetTieneAggregateType<T extends TieneAggregateArgs> = {
        [P in keyof T & keyof AggregateTiene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiene[P]>
      : GetScalarType<T[P], AggregateTiene[P]>
  }




  export type tieneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tieneWhereInput
    orderBy?: tieneOrderByWithAggregationInput | tieneOrderByWithAggregationInput[]
    by: TieneScalarFieldEnum[] | TieneScalarFieldEnum
    having?: tieneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TieneCountAggregateInputType | true
    _avg?: TieneAvgAggregateInputType
    _sum?: TieneSumAggregateInputType
    _min?: TieneMinAggregateInputType
    _max?: TieneMaxAggregateInputType
  }

  export type TieneGroupByOutputType = {
    id: number
    id_persona: number
    id_proyecto: number
    _count: TieneCountAggregateOutputType | null
    _avg: TieneAvgAggregateOutputType | null
    _sum: TieneSumAggregateOutputType | null
    _min: TieneMinAggregateOutputType | null
    _max: TieneMaxAggregateOutputType | null
  }

  type GetTieneGroupByPayload<T extends tieneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TieneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TieneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TieneGroupByOutputType[P]>
            : GetScalarType<T[P], TieneGroupByOutputType[P]>
        }
      >
    >


  export type tieneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiene"]>

  export type tieneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiene"]>

  export type tieneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiene"]>

  export type tieneSelectScalar = {
    id?: boolean
    id_persona?: boolean
    id_proyecto?: boolean
  }

  export type tieneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_persona" | "id_proyecto", ExtArgs["result"]["tiene"]>
  export type tieneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type tieneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type tieneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | personaDefaultArgs<ExtArgs>
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $tienePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tiene"
    objects: {
      persona: Prisma.$personaPayload<ExtArgs>
      proyecto: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_persona: number
      id_proyecto: number
    }, ExtArgs["result"]["tiene"]>
    composites: {}
  }

  type tieneGetPayload<S extends boolean | null | undefined | tieneDefaultArgs> = $Result.GetResult<Prisma.$tienePayload, S>

  type tieneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tieneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TieneCountAggregateInputType | true
    }

  export interface tieneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tiene'], meta: { name: 'tiene' } }
    /**
     * Find zero or one Tiene that matches the filter.
     * @param {tieneFindUniqueArgs} args - Arguments to find a Tiene
     * @example
     * // Get one Tiene
     * const tiene = await prisma.tiene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tieneFindUniqueArgs>(args: SelectSubset<T, tieneFindUniqueArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tiene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tieneFindUniqueOrThrowArgs} args - Arguments to find a Tiene
     * @example
     * // Get one Tiene
     * const tiene = await prisma.tiene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tieneFindUniqueOrThrowArgs>(args: SelectSubset<T, tieneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneFindFirstArgs} args - Arguments to find a Tiene
     * @example
     * // Get one Tiene
     * const tiene = await prisma.tiene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tieneFindFirstArgs>(args?: SelectSubset<T, tieneFindFirstArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tiene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneFindFirstOrThrowArgs} args - Arguments to find a Tiene
     * @example
     * // Get one Tiene
     * const tiene = await prisma.tiene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tieneFindFirstOrThrowArgs>(args?: SelectSubset<T, tieneFindFirstOrThrowArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tienes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tienes
     * const tienes = await prisma.tiene.findMany()
     * 
     * // Get first 10 Tienes
     * const tienes = await prisma.tiene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tieneWithIdOnly = await prisma.tiene.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tieneFindManyArgs>(args?: SelectSubset<T, tieneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tiene.
     * @param {tieneCreateArgs} args - Arguments to create a Tiene.
     * @example
     * // Create one Tiene
     * const Tiene = await prisma.tiene.create({
     *   data: {
     *     // ... data to create a Tiene
     *   }
     * })
     * 
     */
    create<T extends tieneCreateArgs>(args: SelectSubset<T, tieneCreateArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tienes.
     * @param {tieneCreateManyArgs} args - Arguments to create many Tienes.
     * @example
     * // Create many Tienes
     * const tiene = await prisma.tiene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tieneCreateManyArgs>(args?: SelectSubset<T, tieneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tienes and returns the data saved in the database.
     * @param {tieneCreateManyAndReturnArgs} args - Arguments to create many Tienes.
     * @example
     * // Create many Tienes
     * const tiene = await prisma.tiene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tienes and only return the `id`
     * const tieneWithIdOnly = await prisma.tiene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tieneCreateManyAndReturnArgs>(args?: SelectSubset<T, tieneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tiene.
     * @param {tieneDeleteArgs} args - Arguments to delete one Tiene.
     * @example
     * // Delete one Tiene
     * const Tiene = await prisma.tiene.delete({
     *   where: {
     *     // ... filter to delete one Tiene
     *   }
     * })
     * 
     */
    delete<T extends tieneDeleteArgs>(args: SelectSubset<T, tieneDeleteArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tiene.
     * @param {tieneUpdateArgs} args - Arguments to update one Tiene.
     * @example
     * // Update one Tiene
     * const tiene = await prisma.tiene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tieneUpdateArgs>(args: SelectSubset<T, tieneUpdateArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tienes.
     * @param {tieneDeleteManyArgs} args - Arguments to filter Tienes to delete.
     * @example
     * // Delete a few Tienes
     * const { count } = await prisma.tiene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tieneDeleteManyArgs>(args?: SelectSubset<T, tieneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tienes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tienes
     * const tiene = await prisma.tiene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tieneUpdateManyArgs>(args: SelectSubset<T, tieneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tienes and returns the data updated in the database.
     * @param {tieneUpdateManyAndReturnArgs} args - Arguments to update many Tienes.
     * @example
     * // Update many Tienes
     * const tiene = await prisma.tiene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tienes and only return the `id`
     * const tieneWithIdOnly = await prisma.tiene.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tieneUpdateManyAndReturnArgs>(args: SelectSubset<T, tieneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tiene.
     * @param {tieneUpsertArgs} args - Arguments to update or create a Tiene.
     * @example
     * // Update or create a Tiene
     * const tiene = await prisma.tiene.upsert({
     *   create: {
     *     // ... data to create a Tiene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tiene we want to update
     *   }
     * })
     */
    upsert<T extends tieneUpsertArgs>(args: SelectSubset<T, tieneUpsertArgs<ExtArgs>>): Prisma__tieneClient<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tienes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneCountArgs} args - Arguments to filter Tienes to count.
     * @example
     * // Count the number of Tienes
     * const count = await prisma.tiene.count({
     *   where: {
     *     // ... the filter for the Tienes we want to count
     *   }
     * })
    **/
    count<T extends tieneCountArgs>(
      args?: Subset<T, tieneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TieneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tiene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TieneAggregateArgs>(args: Subset<T, TieneAggregateArgs>): Prisma.PrismaPromise<GetTieneAggregateType<T>>

    /**
     * Group by Tiene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tieneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tieneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tieneGroupByArgs['orderBy'] }
        : { orderBy?: tieneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tieneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTieneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tiene model
   */
  readonly fields: tieneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tiene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tieneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends personaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personaDefaultArgs<ExtArgs>>): Prisma__personaClient<$Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tiene model
   */
  interface tieneFieldRefs {
    readonly id: FieldRef<"tiene", 'Int'>
    readonly id_persona: FieldRef<"tiene", 'Int'>
    readonly id_proyecto: FieldRef<"tiene", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tiene findUnique
   */
  export type tieneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter, which tiene to fetch.
     */
    where: tieneWhereUniqueInput
  }

  /**
   * tiene findUniqueOrThrow
   */
  export type tieneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter, which tiene to fetch.
     */
    where: tieneWhereUniqueInput
  }

  /**
   * tiene findFirst
   */
  export type tieneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter, which tiene to fetch.
     */
    where?: tieneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tienes to fetch.
     */
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tienes.
     */
    cursor?: tieneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tienes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tienes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tienes.
     */
    distinct?: TieneScalarFieldEnum | TieneScalarFieldEnum[]
  }

  /**
   * tiene findFirstOrThrow
   */
  export type tieneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter, which tiene to fetch.
     */
    where?: tieneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tienes to fetch.
     */
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tienes.
     */
    cursor?: tieneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tienes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tienes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tienes.
     */
    distinct?: TieneScalarFieldEnum | TieneScalarFieldEnum[]
  }

  /**
   * tiene findMany
   */
  export type tieneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter, which tienes to fetch.
     */
    where?: tieneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tienes to fetch.
     */
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tienes.
     */
    cursor?: tieneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tienes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tienes.
     */
    skip?: number
    distinct?: TieneScalarFieldEnum | TieneScalarFieldEnum[]
  }

  /**
   * tiene create
   */
  export type tieneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * The data needed to create a tiene.
     */
    data: XOR<tieneCreateInput, tieneUncheckedCreateInput>
  }

  /**
   * tiene createMany
   */
  export type tieneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tienes.
     */
    data: tieneCreateManyInput | tieneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tiene createManyAndReturn
   */
  export type tieneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * The data used to create many tienes.
     */
    data: tieneCreateManyInput | tieneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tiene update
   */
  export type tieneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * The data needed to update a tiene.
     */
    data: XOR<tieneUpdateInput, tieneUncheckedUpdateInput>
    /**
     * Choose, which tiene to update.
     */
    where: tieneWhereUniqueInput
  }

  /**
   * tiene updateMany
   */
  export type tieneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tienes.
     */
    data: XOR<tieneUpdateManyMutationInput, tieneUncheckedUpdateManyInput>
    /**
     * Filter which tienes to update
     */
    where?: tieneWhereInput
    /**
     * Limit how many tienes to update.
     */
    limit?: number
  }

  /**
   * tiene updateManyAndReturn
   */
  export type tieneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * The data used to update tienes.
     */
    data: XOR<tieneUpdateManyMutationInput, tieneUncheckedUpdateManyInput>
    /**
     * Filter which tienes to update
     */
    where?: tieneWhereInput
    /**
     * Limit how many tienes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tiene upsert
   */
  export type tieneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * The filter to search for the tiene to update in case it exists.
     */
    where: tieneWhereUniqueInput
    /**
     * In case the tiene found by the `where` argument doesn't exist, create a new tiene with this data.
     */
    create: XOR<tieneCreateInput, tieneUncheckedCreateInput>
    /**
     * In case the tiene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tieneUpdateInput, tieneUncheckedUpdateInput>
  }

  /**
   * tiene delete
   */
  export type tieneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    /**
     * Filter which tiene to delete.
     */
    where: tieneWhereUniqueInput
  }

  /**
   * tiene deleteMany
   */
  export type tieneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tienes to delete
     */
    where?: tieneWhereInput
    /**
     * Limit how many tienes to delete.
     */
    limit?: number
  }

  /**
   * tiene without action
   */
  export type tieneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
  }


  /**
   * Model proyecto
   */

  export type AggregateProyecto = {
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  export type ProyectoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProyectoSumAggregateOutputType = {
    id: number | null
  }

  export type ProyectoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    limite: string | null
  }

  export type ProyectoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    limite: string | null
  }

  export type ProyectoCountAggregateOutputType = {
    id: number
    nombre: number
    limite: number
    _all: number
  }


  export type ProyectoAvgAggregateInputType = {
    id?: true
  }

  export type ProyectoSumAggregateInputType = {
    id?: true
  }

  export type ProyectoMinAggregateInputType = {
    id?: true
    nombre?: true
    limite?: true
  }

  export type ProyectoMaxAggregateInputType = {
    id?: true
    nombre?: true
    limite?: true
  }

  export type ProyectoCountAggregateInputType = {
    id?: true
    nombre?: true
    limite?: true
    _all?: true
  }

  export type ProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyecto to aggregate.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proyectos
    **/
    _count?: true | ProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectoMaxAggregateInputType
  }

  export type GetProyectoAggregateType<T extends ProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyecto[P]>
      : GetScalarType<T[P], AggregateProyecto[P]>
  }




  export type proyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proyectoWhereInput
    orderBy?: proyectoOrderByWithAggregationInput | proyectoOrderByWithAggregationInput[]
    by: ProyectoScalarFieldEnum[] | ProyectoScalarFieldEnum
    having?: proyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectoCountAggregateInputType | true
    _avg?: ProyectoAvgAggregateInputType
    _sum?: ProyectoSumAggregateInputType
    _min?: ProyectoMinAggregateInputType
    _max?: ProyectoMaxAggregateInputType
  }

  export type ProyectoGroupByOutputType = {
    id: number
    nombre: string
    limite: string
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  type GetProyectoGroupByPayload<T extends proyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
        }
      >
    >


  export type proyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    limite?: boolean
    archivos?: boolean | proyecto$archivosArgs<ExtArgs>
    tareas?: boolean | proyecto$tareasArgs<ExtArgs>
    chats?: boolean | proyecto$chatsArgs<ExtArgs>
    personas_tiene?: boolean | proyecto$personas_tieneArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    limite?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    limite?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectScalar = {
    id?: boolean
    nombre?: boolean
    limite?: boolean
  }

  export type proyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "limite", ExtArgs["result"]["proyecto"]>
  export type proyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivos?: boolean | proyecto$archivosArgs<ExtArgs>
    tareas?: boolean | proyecto$tareasArgs<ExtArgs>
    chats?: boolean | proyecto$chatsArgs<ExtArgs>
    personas_tiene?: boolean | proyecto$personas_tieneArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proyecto"
    objects: {
      archivos: Prisma.$archivosPayload<ExtArgs>[]
      tareas: Prisma.$tareasPayload<ExtArgs>[]
      chats: Prisma.$chatPayload<ExtArgs>[]
      personas_tiene: Prisma.$tienePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      limite: string
    }, ExtArgs["result"]["proyecto"]>
    composites: {}
  }

  type proyectoGetPayload<S extends boolean | null | undefined | proyectoDefaultArgs> = $Result.GetResult<Prisma.$proyectoPayload, S>

  type proyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectoCountAggregateInputType | true
    }

  export interface proyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proyecto'], meta: { name: 'proyecto' } }
    /**
     * Find zero or one Proyecto that matches the filter.
     * @param {proyectoFindUniqueArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proyectoFindUniqueArgs>(args: SelectSubset<T, proyectoFindUniqueArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proyectoFindUniqueOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, proyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindFirstArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proyectoFindFirstArgs>(args?: SelectSubset<T, proyectoFindFirstArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindFirstOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, proyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyecto.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proyectoFindManyArgs>(args?: SelectSubset<T, proyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyecto.
     * @param {proyectoCreateArgs} args - Arguments to create a Proyecto.
     * @example
     * // Create one Proyecto
     * const Proyecto = await prisma.proyecto.create({
     *   data: {
     *     // ... data to create a Proyecto
     *   }
     * })
     * 
     */
    create<T extends proyectoCreateArgs>(args: SelectSubset<T, proyectoCreateArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {proyectoCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proyectoCreateManyArgs>(args?: SelectSubset<T, proyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {proyectoCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyectos and only return the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, proyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyecto.
     * @param {proyectoDeleteArgs} args - Arguments to delete one Proyecto.
     * @example
     * // Delete one Proyecto
     * const Proyecto = await prisma.proyecto.delete({
     *   where: {
     *     // ... filter to delete one Proyecto
     *   }
     * })
     * 
     */
    delete<T extends proyectoDeleteArgs>(args: SelectSubset<T, proyectoDeleteArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyecto.
     * @param {proyectoUpdateArgs} args - Arguments to update one Proyecto.
     * @example
     * // Update one Proyecto
     * const proyecto = await prisma.proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proyectoUpdateArgs>(args: SelectSubset<T, proyectoUpdateArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {proyectoDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proyectoDeleteManyArgs>(args?: SelectSubset<T, proyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proyectoUpdateManyArgs>(args: SelectSubset<T, proyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {proyectoUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyectos and only return the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends proyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, proyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyecto.
     * @param {proyectoUpsertArgs} args - Arguments to update or create a Proyecto.
     * @example
     * // Update or create a Proyecto
     * const proyecto = await prisma.proyecto.upsert({
     *   create: {
     *     // ... data to create a Proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyecto we want to update
     *   }
     * })
     */
    upsert<T extends proyectoUpsertArgs>(args: SelectSubset<T, proyectoUpsertArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyecto.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends proyectoCountArgs>(
      args?: Subset<T, proyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProyectoAggregateArgs>(args: Subset<T, ProyectoAggregateArgs>): Prisma.PrismaPromise<GetProyectoAggregateType<T>>

    /**
     * Group by Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends proyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proyectoGroupByArgs['orderBy'] }
        : { orderBy?: proyectoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, proyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proyecto model
   */
  readonly fields: proyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archivos<T extends proyecto$archivosArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tareas<T extends proyecto$tareasArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tareasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends proyecto$chatsArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personas_tiene<T extends proyecto$personas_tieneArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$personas_tieneArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tienePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the proyecto model
   */
  interface proyectoFieldRefs {
    readonly id: FieldRef<"proyecto", 'Int'>
    readonly nombre: FieldRef<"proyecto", 'String'>
    readonly limite: FieldRef<"proyecto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proyecto findUnique
   */
  export type proyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto findUniqueOrThrow
   */
  export type proyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto findFirst
   */
  export type proyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto findFirstOrThrow
   */
  export type proyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto findMany
   */
  export type proyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto create
   */
  export type proyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a proyecto.
     */
    data: XOR<proyectoCreateInput, proyectoUncheckedCreateInput>
  }

  /**
   * proyecto createMany
   */
  export type proyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proyectos.
     */
    data: proyectoCreateManyInput | proyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proyecto createManyAndReturn
   */
  export type proyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * The data used to create many proyectos.
     */
    data: proyectoCreateManyInput | proyectoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proyecto update
   */
  export type proyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a proyecto.
     */
    data: XOR<proyectoUpdateInput, proyectoUncheckedUpdateInput>
    /**
     * Choose, which proyecto to update.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto updateMany
   */
  export type proyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectoUpdateManyMutationInput, proyectoUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
  }

  /**
   * proyecto updateManyAndReturn
   */
  export type proyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectoUpdateManyMutationInput, proyectoUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
  }

  /**
   * proyecto upsert
   */
  export type proyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the proyecto to update in case it exists.
     */
    where: proyectoWhereUniqueInput
    /**
     * In case the proyecto found by the `where` argument doesn't exist, create a new proyecto with this data.
     */
    create: XOR<proyectoCreateInput, proyectoUncheckedCreateInput>
    /**
     * In case the proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proyectoUpdateInput, proyectoUncheckedUpdateInput>
  }

  /**
   * proyecto delete
   */
  export type proyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter which proyecto to delete.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto deleteMany
   */
  export type proyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to delete
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to delete.
     */
    limit?: number
  }

  /**
   * proyecto.archivos
   */
  export type proyecto$archivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivos
     */
    select?: archivosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivos
     */
    omit?: archivosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivosInclude<ExtArgs> | null
    where?: archivosWhereInput
    orderBy?: archivosOrderByWithRelationInput | archivosOrderByWithRelationInput[]
    cursor?: archivosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }

  /**
   * proyecto.tareas
   */
  export type proyecto$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tareas
     */
    select?: tareasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tareas
     */
    omit?: tareasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tareasInclude<ExtArgs> | null
    where?: tareasWhereInput
    orderBy?: tareasOrderByWithRelationInput | tareasOrderByWithRelationInput[]
    cursor?: tareasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareasScalarFieldEnum | TareasScalarFieldEnum[]
  }

  /**
   * proyecto.chats
   */
  export type proyecto$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    where?: chatWhereInput
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    cursor?: chatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * proyecto.personas_tiene
   */
  export type proyecto$personas_tieneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiene
     */
    select?: tieneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiene
     */
    omit?: tieneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tieneInclude<ExtArgs> | null
    where?: tieneWhereInput
    orderBy?: tieneOrderByWithRelationInput | tieneOrderByWithRelationInput[]
    cursor?: tieneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TieneScalarFieldEnum | TieneScalarFieldEnum[]
  }

  /**
   * proyecto without action
   */
  export type proyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
  }


  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    id_proyecto: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    id_proyecto: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_proyecto: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    id_proyecto: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    nombre: number
    id_proyecto: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    id_proyecto?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    id_proyecto?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    nombre?: true
    id_proyecto?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    nombre?: true
    id_proyecto?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    nombre?: true
    id_proyecto?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    nombre: string
    id_proyecto: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_proyecto?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    mensajes?: boolean | chat$mensajesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_proyecto?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    id_proyecto?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectScalar = {
    id?: boolean
    nombre?: boolean
    id_proyecto?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "id_proyecto", ExtArgs["result"]["chat"]>
  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    mensajes?: boolean | chat$mensajesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type chatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {
      proyecto: Prisma.$proyectoPayload<ExtArgs>
      mensajes: Prisma.$mensajesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      id_proyecto: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatCreateManyAndReturnArgs>(args?: SelectSubset<T, chatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatUpdateManyAndReturnArgs>(args: SelectSubset<T, chatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends chat$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, chat$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<"chat", 'Int'>
    readonly nombre: FieldRef<"chat", 'String'>
    readonly id_proyecto: FieldRef<"chat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat createManyAndReturn
   */
  export type chatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat updateManyAndReturn
   */
  export type chatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat.mensajes
   */
  export type chat$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    cursor?: mensajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PersonaScalarFieldEnum: {
    id: 'id',
    mail: 'mail',
    nombre: 'nombre',
    contrasenia: 'contrasenia',
    usuario: 'usuario',
    googleRefreshToken: 'googleRefreshToken'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const ArchivosScalarFieldEnum: {
    formato: 'formato',
    archivo: 'archivo',
    nombrearchivo: 'nombrearchivo',
    id: 'id',
    id_persona: 'id_persona',
    id_proyecto: 'id_proyecto'
  };

  export type ArchivosScalarFieldEnum = (typeof ArchivosScalarFieldEnum)[keyof typeof ArchivosScalarFieldEnum]


  export const MensajesScalarFieldEnum: {
    id_chat: 'id_chat',
    id_persona: 'id_persona',
    mensaje: 'mensaje',
    estado: 'estado',
    id: 'id'
  };

  export type MensajesScalarFieldEnum = (typeof MensajesScalarFieldEnum)[keyof typeof MensajesScalarFieldEnum]


  export const TareasScalarFieldEnum: {
    nombre: 'nombre',
    estado: 'estado',
    id: 'id',
    id_proyecto: 'id_proyecto',
    id_persona: 'id_persona',
    limite: 'limite'
  };

  export type TareasScalarFieldEnum = (typeof TareasScalarFieldEnum)[keyof typeof TareasScalarFieldEnum]


  export const PersonalizacionesScalarFieldEnum: {
    id: 'id',
    id_persona: 'id_persona',
    codigo_a_insertar: 'codigo_a_insertar'
  };

  export type PersonalizacionesScalarFieldEnum = (typeof PersonalizacionesScalarFieldEnum)[keyof typeof PersonalizacionesScalarFieldEnum]


  export const TieneScalarFieldEnum: {
    id: 'id',
    id_persona: 'id_persona',
    id_proyecto: 'id_proyecto'
  };

  export type TieneScalarFieldEnum = (typeof TieneScalarFieldEnum)[keyof typeof TieneScalarFieldEnum]


  export const ProyectoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    limite: 'limite'
  };

  export type ProyectoScalarFieldEnum = (typeof ProyectoScalarFieldEnum)[keyof typeof ProyectoScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    id_proyecto: 'id_proyecto'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type personaWhereInput = {
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    id?: IntFilter<"persona"> | number
    mail?: StringFilter<"persona"> | string
    nombre?: StringFilter<"persona"> | string
    contrasenia?: StringFilter<"persona"> | string
    usuario?: StringFilter<"persona"> | string
    googleRefreshToken?: StringNullableFilter<"persona"> | string | null
    archivos?: ArchivosListRelationFilter
    mensajes?: MensajesListRelationFilter
    tareas?: TareasListRelationFilter
    personalizaciones?: PersonalizacionesListRelationFilter
    proyectos_tiene?: TieneListRelationFilter
  }

  export type personaOrderByWithRelationInput = {
    id?: SortOrder
    mail?: SortOrder
    nombre?: SortOrder
    contrasenia?: SortOrder
    usuario?: SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    archivos?: archivosOrderByRelationAggregateInput
    mensajes?: mensajesOrderByRelationAggregateInput
    tareas?: tareasOrderByRelationAggregateInput
    personalizaciones?: personalizacionesOrderByRelationAggregateInput
    proyectos_tiene?: tieneOrderByRelationAggregateInput
  }

  export type personaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mail?: string
    usuario?: string
    AND?: personaWhereInput | personaWhereInput[]
    OR?: personaWhereInput[]
    NOT?: personaWhereInput | personaWhereInput[]
    nombre?: StringFilter<"persona"> | string
    contrasenia?: StringFilter<"persona"> | string
    googleRefreshToken?: StringNullableFilter<"persona"> | string | null
    archivos?: ArchivosListRelationFilter
    mensajes?: MensajesListRelationFilter
    tareas?: TareasListRelationFilter
    personalizaciones?: PersonalizacionesListRelationFilter
    proyectos_tiene?: TieneListRelationFilter
  }, "id" | "mail" | "usuario">

  export type personaOrderByWithAggregationInput = {
    id?: SortOrder
    mail?: SortOrder
    nombre?: SortOrder
    contrasenia?: SortOrder
    usuario?: SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    _count?: personaCountOrderByAggregateInput
    _avg?: personaAvgOrderByAggregateInput
    _max?: personaMaxOrderByAggregateInput
    _min?: personaMinOrderByAggregateInput
    _sum?: personaSumOrderByAggregateInput
  }

  export type personaScalarWhereWithAggregatesInput = {
    AND?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    OR?: personaScalarWhereWithAggregatesInput[]
    NOT?: personaScalarWhereWithAggregatesInput | personaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"persona"> | number
    mail?: StringWithAggregatesFilter<"persona"> | string
    nombre?: StringWithAggregatesFilter<"persona"> | string
    contrasenia?: StringWithAggregatesFilter<"persona"> | string
    usuario?: StringWithAggregatesFilter<"persona"> | string
    googleRefreshToken?: StringNullableWithAggregatesFilter<"persona"> | string | null
  }

  export type archivosWhereInput = {
    AND?: archivosWhereInput | archivosWhereInput[]
    OR?: archivosWhereInput[]
    NOT?: archivosWhereInput | archivosWhereInput[]
    formato?: StringFilter<"archivos"> | string
    archivo?: BytesFilter<"archivos"> | Uint8Array
    nombrearchivo?: StringFilter<"archivos"> | string
    id?: IntFilter<"archivos"> | number
    id_persona?: IntFilter<"archivos"> | number
    id_proyecto?: IntFilter<"archivos"> | number
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type archivosOrderByWithRelationInput = {
    formato?: SortOrder
    archivo?: SortOrder
    nombrearchivo?: SortOrder
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
    persona?: personaOrderByWithRelationInput
    proyecto?: proyectoOrderByWithRelationInput
  }

  export type archivosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: archivosWhereInput | archivosWhereInput[]
    OR?: archivosWhereInput[]
    NOT?: archivosWhereInput | archivosWhereInput[]
    formato?: StringFilter<"archivos"> | string
    archivo?: BytesFilter<"archivos"> | Uint8Array
    nombrearchivo?: StringFilter<"archivos"> | string
    id_persona?: IntFilter<"archivos"> | number
    id_proyecto?: IntFilter<"archivos"> | number
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type archivosOrderByWithAggregationInput = {
    formato?: SortOrder
    archivo?: SortOrder
    nombrearchivo?: SortOrder
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
    _count?: archivosCountOrderByAggregateInput
    _avg?: archivosAvgOrderByAggregateInput
    _max?: archivosMaxOrderByAggregateInput
    _min?: archivosMinOrderByAggregateInput
    _sum?: archivosSumOrderByAggregateInput
  }

  export type archivosScalarWhereWithAggregatesInput = {
    AND?: archivosScalarWhereWithAggregatesInput | archivosScalarWhereWithAggregatesInput[]
    OR?: archivosScalarWhereWithAggregatesInput[]
    NOT?: archivosScalarWhereWithAggregatesInput | archivosScalarWhereWithAggregatesInput[]
    formato?: StringWithAggregatesFilter<"archivos"> | string
    archivo?: BytesWithAggregatesFilter<"archivos"> | Uint8Array
    nombrearchivo?: StringWithAggregatesFilter<"archivos"> | string
    id?: IntWithAggregatesFilter<"archivos"> | number
    id_persona?: IntWithAggregatesFilter<"archivos"> | number
    id_proyecto?: IntWithAggregatesFilter<"archivos"> | number
  }

  export type mensajesWhereInput = {
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    id_chat?: IntFilter<"mensajes"> | number
    id_persona?: IntFilter<"mensajes"> | number
    mensaje?: StringFilter<"mensajes"> | string
    estado?: StringFilter<"mensajes"> | string
    id?: IntFilter<"mensajes"> | number
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }

  export type mensajesOrderByWithRelationInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    chat?: chatOrderByWithRelationInput
    persona?: personaOrderByWithRelationInput
  }

  export type mensajesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    id_chat?: IntFilter<"mensajes"> | number
    id_persona?: IntFilter<"mensajes"> | number
    mensaje?: StringFilter<"mensajes"> | string
    estado?: StringFilter<"mensajes"> | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }, "id">

  export type mensajesOrderByWithAggregationInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    _count?: mensajesCountOrderByAggregateInput
    _avg?: mensajesAvgOrderByAggregateInput
    _max?: mensajesMaxOrderByAggregateInput
    _min?: mensajesMinOrderByAggregateInput
    _sum?: mensajesSumOrderByAggregateInput
  }

  export type mensajesScalarWhereWithAggregatesInput = {
    AND?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    OR?: mensajesScalarWhereWithAggregatesInput[]
    NOT?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    id_chat?: IntWithAggregatesFilter<"mensajes"> | number
    id_persona?: IntWithAggregatesFilter<"mensajes"> | number
    mensaje?: StringWithAggregatesFilter<"mensajes"> | string
    estado?: StringWithAggregatesFilter<"mensajes"> | string
    id?: IntWithAggregatesFilter<"mensajes"> | number
  }

  export type tareasWhereInput = {
    AND?: tareasWhereInput | tareasWhereInput[]
    OR?: tareasWhereInput[]
    NOT?: tareasWhereInput | tareasWhereInput[]
    nombre?: StringFilter<"tareas"> | string
    estado?: StringFilter<"tareas"> | string
    id?: IntFilter<"tareas"> | number
    id_proyecto?: IntFilter<"tareas"> | number
    id_persona?: IntFilter<"tareas"> | number
    limite?: StringFilter<"tareas"> | string
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }

  export type tareasOrderByWithRelationInput = {
    nombre?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
    limite?: SortOrder
    proyecto?: proyectoOrderByWithRelationInput
    persona?: personaOrderByWithRelationInput
  }

  export type tareasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tareasWhereInput | tareasWhereInput[]
    OR?: tareasWhereInput[]
    NOT?: tareasWhereInput | tareasWhereInput[]
    nombre?: StringFilter<"tareas"> | string
    estado?: StringFilter<"tareas"> | string
    id_proyecto?: IntFilter<"tareas"> | number
    id_persona?: IntFilter<"tareas"> | number
    limite?: StringFilter<"tareas"> | string
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }, "id">

  export type tareasOrderByWithAggregationInput = {
    nombre?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
    limite?: SortOrder
    _count?: tareasCountOrderByAggregateInput
    _avg?: tareasAvgOrderByAggregateInput
    _max?: tareasMaxOrderByAggregateInput
    _min?: tareasMinOrderByAggregateInput
    _sum?: tareasSumOrderByAggregateInput
  }

  export type tareasScalarWhereWithAggregatesInput = {
    AND?: tareasScalarWhereWithAggregatesInput | tareasScalarWhereWithAggregatesInput[]
    OR?: tareasScalarWhereWithAggregatesInput[]
    NOT?: tareasScalarWhereWithAggregatesInput | tareasScalarWhereWithAggregatesInput[]
    nombre?: StringWithAggregatesFilter<"tareas"> | string
    estado?: StringWithAggregatesFilter<"tareas"> | string
    id?: IntWithAggregatesFilter<"tareas"> | number
    id_proyecto?: IntWithAggregatesFilter<"tareas"> | number
    id_persona?: IntWithAggregatesFilter<"tareas"> | number
    limite?: StringWithAggregatesFilter<"tareas"> | string
  }

  export type personalizacionesWhereInput = {
    AND?: personalizacionesWhereInput | personalizacionesWhereInput[]
    OR?: personalizacionesWhereInput[]
    NOT?: personalizacionesWhereInput | personalizacionesWhereInput[]
    id?: IntFilter<"personalizaciones"> | number
    id_persona?: IntFilter<"personalizaciones"> | number
    codigo_a_insertar?: StringFilter<"personalizaciones"> | string
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }

  export type personalizacionesOrderByWithRelationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    codigo_a_insertar?: SortOrder
    persona?: personaOrderByWithRelationInput
  }

  export type personalizacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: personalizacionesWhereInput | personalizacionesWhereInput[]
    OR?: personalizacionesWhereInput[]
    NOT?: personalizacionesWhereInput | personalizacionesWhereInput[]
    id_persona?: IntFilter<"personalizaciones"> | number
    codigo_a_insertar?: StringFilter<"personalizaciones"> | string
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
  }, "id">

  export type personalizacionesOrderByWithAggregationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    codigo_a_insertar?: SortOrder
    _count?: personalizacionesCountOrderByAggregateInput
    _avg?: personalizacionesAvgOrderByAggregateInput
    _max?: personalizacionesMaxOrderByAggregateInput
    _min?: personalizacionesMinOrderByAggregateInput
    _sum?: personalizacionesSumOrderByAggregateInput
  }

  export type personalizacionesScalarWhereWithAggregatesInput = {
    AND?: personalizacionesScalarWhereWithAggregatesInput | personalizacionesScalarWhereWithAggregatesInput[]
    OR?: personalizacionesScalarWhereWithAggregatesInput[]
    NOT?: personalizacionesScalarWhereWithAggregatesInput | personalizacionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"personalizaciones"> | number
    id_persona?: IntWithAggregatesFilter<"personalizaciones"> | number
    codigo_a_insertar?: StringWithAggregatesFilter<"personalizaciones"> | string
  }

  export type tieneWhereInput = {
    AND?: tieneWhereInput | tieneWhereInput[]
    OR?: tieneWhereInput[]
    NOT?: tieneWhereInput | tieneWhereInput[]
    id?: IntFilter<"tiene"> | number
    id_persona?: IntFilter<"tiene"> | number
    id_proyecto?: IntFilter<"tiene"> | number
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type tieneOrderByWithRelationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
    persona?: personaOrderByWithRelationInput
    proyecto?: proyectoOrderByWithRelationInput
  }

  export type tieneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tieneWhereInput | tieneWhereInput[]
    OR?: tieneWhereInput[]
    NOT?: tieneWhereInput | tieneWhereInput[]
    id_persona?: IntFilter<"tiene"> | number
    id_proyecto?: IntFilter<"tiene"> | number
    persona?: XOR<PersonaScalarRelationFilter, personaWhereInput>
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type tieneOrderByWithAggregationInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
    _count?: tieneCountOrderByAggregateInput
    _avg?: tieneAvgOrderByAggregateInput
    _max?: tieneMaxOrderByAggregateInput
    _min?: tieneMinOrderByAggregateInput
    _sum?: tieneSumOrderByAggregateInput
  }

  export type tieneScalarWhereWithAggregatesInput = {
    AND?: tieneScalarWhereWithAggregatesInput | tieneScalarWhereWithAggregatesInput[]
    OR?: tieneScalarWhereWithAggregatesInput[]
    NOT?: tieneScalarWhereWithAggregatesInput | tieneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tiene"> | number
    id_persona?: IntWithAggregatesFilter<"tiene"> | number
    id_proyecto?: IntWithAggregatesFilter<"tiene"> | number
  }

  export type proyectoWhereInput = {
    AND?: proyectoWhereInput | proyectoWhereInput[]
    OR?: proyectoWhereInput[]
    NOT?: proyectoWhereInput | proyectoWhereInput[]
    id?: IntFilter<"proyecto"> | number
    nombre?: StringFilter<"proyecto"> | string
    limite?: StringFilter<"proyecto"> | string
    archivos?: ArchivosListRelationFilter
    tareas?: TareasListRelationFilter
    chats?: ChatListRelationFilter
    personas_tiene?: TieneListRelationFilter
  }

  export type proyectoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    limite?: SortOrder
    archivos?: archivosOrderByRelationAggregateInput
    tareas?: tareasOrderByRelationAggregateInput
    chats?: chatOrderByRelationAggregateInput
    personas_tiene?: tieneOrderByRelationAggregateInput
  }

  export type proyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: proyectoWhereInput | proyectoWhereInput[]
    OR?: proyectoWhereInput[]
    NOT?: proyectoWhereInput | proyectoWhereInput[]
    nombre?: StringFilter<"proyecto"> | string
    limite?: StringFilter<"proyecto"> | string
    archivos?: ArchivosListRelationFilter
    tareas?: TareasListRelationFilter
    chats?: ChatListRelationFilter
    personas_tiene?: TieneListRelationFilter
  }, "id">

  export type proyectoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    limite?: SortOrder
    _count?: proyectoCountOrderByAggregateInput
    _avg?: proyectoAvgOrderByAggregateInput
    _max?: proyectoMaxOrderByAggregateInput
    _min?: proyectoMinOrderByAggregateInput
    _sum?: proyectoSumOrderByAggregateInput
  }

  export type proyectoScalarWhereWithAggregatesInput = {
    AND?: proyectoScalarWhereWithAggregatesInput | proyectoScalarWhereWithAggregatesInput[]
    OR?: proyectoScalarWhereWithAggregatesInput[]
    NOT?: proyectoScalarWhereWithAggregatesInput | proyectoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"proyecto"> | number
    nombre?: StringWithAggregatesFilter<"proyecto"> | string
    limite?: StringWithAggregatesFilter<"proyecto"> | string
  }

  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    id?: IntFilter<"chat"> | number
    nombre?: StringFilter<"chat"> | string
    id_proyecto?: IntFilter<"chat"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    mensajes?: MensajesListRelationFilter
  }

  export type chatOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_proyecto?: SortOrder
    proyecto?: proyectoOrderByWithRelationInput
    mensajes?: mensajesOrderByRelationAggregateInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    nombre?: StringFilter<"chat"> | string
    id_proyecto?: IntFilter<"chat"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    mensajes?: MensajesListRelationFilter
  }, "id">

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_proyecto?: SortOrder
    _count?: chatCountOrderByAggregateInput
    _avg?: chatAvgOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
    _sum?: chatSumOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat"> | number
    nombre?: StringWithAggregatesFilter<"chat"> | string
    id_proyecto?: IntWithAggregatesFilter<"chat"> | number
  }

  export type personaCreateInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesCreateNestedManyWithoutPersonaInput
    tareas?: tareasCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosUncheckedCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesUncheckedCreateNestedManyWithoutPersonaInput
    tareas?: tareasUncheckedCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesUncheckedCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaUpdateInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUncheckedUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUncheckedUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaCreateManyInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
  }

  export type personaUpdateManyMutationInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivosCreateInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    persona: personaCreateNestedOneWithoutArchivosInput
    proyecto: proyectoCreateNestedOneWithoutArchivosInput
  }

  export type archivosUncheckedCreateInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_persona: number
    id_proyecto: number
  }

  export type archivosUpdateInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    persona?: personaUpdateOneRequiredWithoutArchivosNestedInput
    proyecto?: proyectoUpdateOneRequiredWithoutArchivosNestedInput
  }

  export type archivosUncheckedUpdateInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type archivosCreateManyInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_persona: number
    id_proyecto: number
  }

  export type archivosUpdateManyMutationInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
  }

  export type archivosUncheckedUpdateManyInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesCreateInput = {
    mensaje: string
    estado: string
    chat: chatCreateNestedOneWithoutMensajesInput
    persona: personaCreateNestedOneWithoutMensajesInput
  }

  export type mensajesUncheckedCreateInput = {
    id_chat: number
    id_persona: number
    mensaje: string
    estado: string
    id?: number
  }

  export type mensajesUpdateInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    chat?: chatUpdateOneRequiredWithoutMensajesNestedInput
    persona?: personaUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type mensajesUncheckedUpdateInput = {
    id_chat?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesCreateManyInput = {
    id_chat: number
    id_persona: number
    mensaje: string
    estado: string
    id?: number
  }

  export type mensajesUpdateManyMutationInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type mensajesUncheckedUpdateManyInput = {
    id_chat?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type tareasCreateInput = {
    nombre: string
    estado: string
    limite: string
    proyecto: proyectoCreateNestedOneWithoutTareasInput
    persona: personaCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateInput = {
    nombre: string
    estado: string
    id?: number
    id_proyecto: number
    id_persona: number
    limite: string
  }

  export type tareasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutTareasNestedInput
    persona?: personaUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type tareasCreateManyInput = {
    nombre: string
    estado: string
    id?: number
    id_proyecto: number
    id_persona: number
    limite: string
  }

  export type tareasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type tareasUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesCreateInput = {
    codigo_a_insertar: string
    persona: personaCreateNestedOneWithoutPersonalizacionesInput
  }

  export type personalizacionesUncheckedCreateInput = {
    id?: number
    id_persona: number
    codigo_a_insertar: string
  }

  export type personalizacionesUpdateInput = {
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
    persona?: personaUpdateOneRequiredWithoutPersonalizacionesNestedInput
  }

  export type personalizacionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesCreateManyInput = {
    id?: number
    id_persona: number
    codigo_a_insertar: string
  }

  export type personalizacionesUpdateManyMutationInput = {
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type tieneCreateInput = {
    persona: personaCreateNestedOneWithoutProyectos_tieneInput
    proyecto: proyectoCreateNestedOneWithoutPersonas_tieneInput
  }

  export type tieneUncheckedCreateInput = {
    id?: number
    id_persona: number
    id_proyecto: number
  }

  export type tieneUpdateInput = {
    persona?: personaUpdateOneRequiredWithoutProyectos_tieneNestedInput
    proyecto?: proyectoUpdateOneRequiredWithoutPersonas_tieneNestedInput
  }

  export type tieneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type tieneCreateManyInput = {
    id?: number
    id_persona: number
    id_proyecto: number
  }

  export type tieneUpdateManyMutationInput = {

  }

  export type tieneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type proyectoCreateInput = {
    nombre: string
    limite: string
    archivos?: archivosCreateNestedManyWithoutProyectoInput
    tareas?: tareasCreateNestedManyWithoutProyectoInput
    chats?: chatCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUncheckedCreateInput = {
    id?: number
    nombre: string
    limite: string
    archivos?: archivosUncheckedCreateNestedManyWithoutProyectoInput
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
    chats?: chatUncheckedCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
    chats?: chatUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUncheckedUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
    chats?: chatUncheckedUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoCreateManyInput = {
    id?: number
    nombre: string
    limite: string
  }

  export type proyectoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type proyectoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type chatCreateInput = {
    nombre: string
    proyecto: proyectoCreateNestedOneWithoutChatsInput
    mensajes?: mensajesCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateInput = {
    id?: number
    nombre: string
    id_proyecto: number
    mensajes?: mensajesUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutChatsNestedInput
    mensajes?: mensajesUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
    mensajes?: mensajesUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatCreateManyInput = {
    id?: number
    nombre: string
    id_proyecto: number
  }

  export type chatUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type chatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArchivosListRelationFilter = {
    every?: archivosWhereInput
    some?: archivosWhereInput
    none?: archivosWhereInput
  }

  export type MensajesListRelationFilter = {
    every?: mensajesWhereInput
    some?: mensajesWhereInput
    none?: mensajesWhereInput
  }

  export type TareasListRelationFilter = {
    every?: tareasWhereInput
    some?: tareasWhereInput
    none?: tareasWhereInput
  }

  export type PersonalizacionesListRelationFilter = {
    every?: personalizacionesWhereInput
    some?: personalizacionesWhereInput
    none?: personalizacionesWhereInput
  }

  export type TieneListRelationFilter = {
    every?: tieneWhereInput
    some?: tieneWhereInput
    none?: tieneWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type archivosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mensajesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tareasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personalizacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tieneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personaCountOrderByAggregateInput = {
    id?: SortOrder
    mail?: SortOrder
    nombre?: SortOrder
    contrasenia?: SortOrder
    usuario?: SortOrder
    googleRefreshToken?: SortOrder
  }

  export type personaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type personaMaxOrderByAggregateInput = {
    id?: SortOrder
    mail?: SortOrder
    nombre?: SortOrder
    contrasenia?: SortOrder
    usuario?: SortOrder
    googleRefreshToken?: SortOrder
  }

  export type personaMinOrderByAggregateInput = {
    id?: SortOrder
    mail?: SortOrder
    nombre?: SortOrder
    contrasenia?: SortOrder
    usuario?: SortOrder
    googleRefreshToken?: SortOrder
  }

  export type personaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type PersonaScalarRelationFilter = {
    is?: personaWhereInput
    isNot?: personaWhereInput
  }

  export type ProyectoScalarRelationFilter = {
    is?: proyectoWhereInput
    isNot?: proyectoWhereInput
  }

  export type archivosCountOrderByAggregateInput = {
    formato?: SortOrder
    archivo?: SortOrder
    nombrearchivo?: SortOrder
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type archivosAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type archivosMaxOrderByAggregateInput = {
    formato?: SortOrder
    archivo?: SortOrder
    nombrearchivo?: SortOrder
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type archivosMinOrderByAggregateInput = {
    formato?: SortOrder
    archivo?: SortOrder
    nombrearchivo?: SortOrder
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type archivosSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ChatScalarRelationFilter = {
    is?: chatWhereInput
    isNot?: chatWhereInput
  }

  export type mensajesCountOrderByAggregateInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    id?: SortOrder
  }

  export type mensajesAvgOrderByAggregateInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    id?: SortOrder
  }

  export type mensajesMaxOrderByAggregateInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    id?: SortOrder
  }

  export type mensajesMinOrderByAggregateInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    mensaje?: SortOrder
    estado?: SortOrder
    id?: SortOrder
  }

  export type mensajesSumOrderByAggregateInput = {
    id_chat?: SortOrder
    id_persona?: SortOrder
    id?: SortOrder
  }

  export type tareasCountOrderByAggregateInput = {
    nombre?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
    limite?: SortOrder
  }

  export type tareasAvgOrderByAggregateInput = {
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
  }

  export type tareasMaxOrderByAggregateInput = {
    nombre?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
    limite?: SortOrder
  }

  export type tareasMinOrderByAggregateInput = {
    nombre?: SortOrder
    estado?: SortOrder
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
    limite?: SortOrder
  }

  export type tareasSumOrderByAggregateInput = {
    id?: SortOrder
    id_proyecto?: SortOrder
    id_persona?: SortOrder
  }

  export type personalizacionesCountOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    codigo_a_insertar?: SortOrder
  }

  export type personalizacionesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type personalizacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    codigo_a_insertar?: SortOrder
  }

  export type personalizacionesMinOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    codigo_a_insertar?: SortOrder
  }

  export type personalizacionesSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
  }

  export type tieneCountOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type tieneAvgOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type tieneMaxOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type tieneMinOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type tieneSumOrderByAggregateInput = {
    id?: SortOrder
    id_persona?: SortOrder
    id_proyecto?: SortOrder
  }

  export type ChatListRelationFilter = {
    every?: chatWhereInput
    some?: chatWhereInput
    none?: chatWhereInput
  }

  export type chatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type proyectoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    limite?: SortOrder
  }

  export type proyectoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    limite?: SortOrder
  }

  export type proyectoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    limite?: SortOrder
  }

  export type proyectoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_proyecto?: SortOrder
  }

  export type chatAvgOrderByAggregateInput = {
    id?: SortOrder
    id_proyecto?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_proyecto?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    id_proyecto?: SortOrder
  }

  export type chatSumOrderByAggregateInput = {
    id?: SortOrder
    id_proyecto?: SortOrder
  }

  export type archivosCreateNestedManyWithoutPersonaInput = {
    create?: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput> | archivosCreateWithoutPersonaInput[] | archivosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutPersonaInput | archivosCreateOrConnectWithoutPersonaInput[]
    createMany?: archivosCreateManyPersonaInputEnvelope
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
  }

  export type mensajesCreateNestedManyWithoutPersonaInput = {
    create?: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput> | mensajesCreateWithoutPersonaInput[] | mensajesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutPersonaInput | mensajesCreateOrConnectWithoutPersonaInput[]
    createMany?: mensajesCreateManyPersonaInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type tareasCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput> | tareasCreateWithoutPersonaInput[] | tareasUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutPersonaInput | tareasCreateOrConnectWithoutPersonaInput[]
    createMany?: tareasCreateManyPersonaInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type personalizacionesCreateNestedManyWithoutPersonaInput = {
    create?: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput> | personalizacionesCreateWithoutPersonaInput[] | personalizacionesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: personalizacionesCreateOrConnectWithoutPersonaInput | personalizacionesCreateOrConnectWithoutPersonaInput[]
    createMany?: personalizacionesCreateManyPersonaInputEnvelope
    connect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
  }

  export type tieneCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput> | tieneCreateWithoutPersonaInput[] | tieneUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutPersonaInput | tieneCreateOrConnectWithoutPersonaInput[]
    createMany?: tieneCreateManyPersonaInputEnvelope
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
  }

  export type archivosUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput> | archivosCreateWithoutPersonaInput[] | archivosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutPersonaInput | archivosCreateOrConnectWithoutPersonaInput[]
    createMany?: archivosCreateManyPersonaInputEnvelope
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
  }

  export type mensajesUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput> | mensajesCreateWithoutPersonaInput[] | mensajesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutPersonaInput | mensajesCreateOrConnectWithoutPersonaInput[]
    createMany?: mensajesCreateManyPersonaInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type tareasUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput> | tareasCreateWithoutPersonaInput[] | tareasUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutPersonaInput | tareasCreateOrConnectWithoutPersonaInput[]
    createMany?: tareasCreateManyPersonaInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type personalizacionesUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput> | personalizacionesCreateWithoutPersonaInput[] | personalizacionesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: personalizacionesCreateOrConnectWithoutPersonaInput | personalizacionesCreateOrConnectWithoutPersonaInput[]
    createMany?: personalizacionesCreateManyPersonaInputEnvelope
    connect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
  }

  export type tieneUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput> | tieneCreateWithoutPersonaInput[] | tieneUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutPersonaInput | tieneCreateOrConnectWithoutPersonaInput[]
    createMany?: tieneCreateManyPersonaInputEnvelope
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type archivosUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput> | archivosCreateWithoutPersonaInput[] | archivosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutPersonaInput | archivosCreateOrConnectWithoutPersonaInput[]
    upsert?: archivosUpsertWithWhereUniqueWithoutPersonaInput | archivosUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: archivosCreateManyPersonaInputEnvelope
    set?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    disconnect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    delete?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    update?: archivosUpdateWithWhereUniqueWithoutPersonaInput | archivosUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: archivosUpdateManyWithWhereWithoutPersonaInput | archivosUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: archivosScalarWhereInput | archivosScalarWhereInput[]
  }

  export type mensajesUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput> | mensajesCreateWithoutPersonaInput[] | mensajesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutPersonaInput | mensajesCreateOrConnectWithoutPersonaInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutPersonaInput | mensajesUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: mensajesCreateManyPersonaInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutPersonaInput | mensajesUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutPersonaInput | mensajesUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type tareasUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput> | tareasCreateWithoutPersonaInput[] | tareasUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutPersonaInput | tareasCreateOrConnectWithoutPersonaInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutPersonaInput | tareasUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tareasCreateManyPersonaInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutPersonaInput | tareasUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutPersonaInput | tareasUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type personalizacionesUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput> | personalizacionesCreateWithoutPersonaInput[] | personalizacionesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: personalizacionesCreateOrConnectWithoutPersonaInput | personalizacionesCreateOrConnectWithoutPersonaInput[]
    upsert?: personalizacionesUpsertWithWhereUniqueWithoutPersonaInput | personalizacionesUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: personalizacionesCreateManyPersonaInputEnvelope
    set?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    disconnect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    delete?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    connect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    update?: personalizacionesUpdateWithWhereUniqueWithoutPersonaInput | personalizacionesUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: personalizacionesUpdateManyWithWhereWithoutPersonaInput | personalizacionesUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: personalizacionesScalarWhereInput | personalizacionesScalarWhereInput[]
  }

  export type tieneUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput> | tieneCreateWithoutPersonaInput[] | tieneUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutPersonaInput | tieneCreateOrConnectWithoutPersonaInput[]
    upsert?: tieneUpsertWithWhereUniqueWithoutPersonaInput | tieneUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tieneCreateManyPersonaInputEnvelope
    set?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    disconnect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    delete?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    update?: tieneUpdateWithWhereUniqueWithoutPersonaInput | tieneUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tieneUpdateManyWithWhereWithoutPersonaInput | tieneUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tieneScalarWhereInput | tieneScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type archivosUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput> | archivosCreateWithoutPersonaInput[] | archivosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutPersonaInput | archivosCreateOrConnectWithoutPersonaInput[]
    upsert?: archivosUpsertWithWhereUniqueWithoutPersonaInput | archivosUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: archivosCreateManyPersonaInputEnvelope
    set?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    disconnect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    delete?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    update?: archivosUpdateWithWhereUniqueWithoutPersonaInput | archivosUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: archivosUpdateManyWithWhereWithoutPersonaInput | archivosUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: archivosScalarWhereInput | archivosScalarWhereInput[]
  }

  export type mensajesUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput> | mensajesCreateWithoutPersonaInput[] | mensajesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutPersonaInput | mensajesCreateOrConnectWithoutPersonaInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutPersonaInput | mensajesUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: mensajesCreateManyPersonaInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutPersonaInput | mensajesUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutPersonaInput | mensajesUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type tareasUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput> | tareasCreateWithoutPersonaInput[] | tareasUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutPersonaInput | tareasCreateOrConnectWithoutPersonaInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutPersonaInput | tareasUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tareasCreateManyPersonaInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutPersonaInput | tareasUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutPersonaInput | tareasUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput> | personalizacionesCreateWithoutPersonaInput[] | personalizacionesUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: personalizacionesCreateOrConnectWithoutPersonaInput | personalizacionesCreateOrConnectWithoutPersonaInput[]
    upsert?: personalizacionesUpsertWithWhereUniqueWithoutPersonaInput | personalizacionesUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: personalizacionesCreateManyPersonaInputEnvelope
    set?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    disconnect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    delete?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    connect?: personalizacionesWhereUniqueInput | personalizacionesWhereUniqueInput[]
    update?: personalizacionesUpdateWithWhereUniqueWithoutPersonaInput | personalizacionesUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: personalizacionesUpdateManyWithWhereWithoutPersonaInput | personalizacionesUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: personalizacionesScalarWhereInput | personalizacionesScalarWhereInput[]
  }

  export type tieneUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput> | tieneCreateWithoutPersonaInput[] | tieneUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutPersonaInput | tieneCreateOrConnectWithoutPersonaInput[]
    upsert?: tieneUpsertWithWhereUniqueWithoutPersonaInput | tieneUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tieneCreateManyPersonaInputEnvelope
    set?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    disconnect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    delete?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    update?: tieneUpdateWithWhereUniqueWithoutPersonaInput | tieneUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tieneUpdateManyWithWhereWithoutPersonaInput | tieneUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tieneScalarWhereInput | tieneScalarWhereInput[]
  }

  export type personaCreateNestedOneWithoutArchivosInput = {
    create?: XOR<personaCreateWithoutArchivosInput, personaUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: personaCreateOrConnectWithoutArchivosInput
    connect?: personaWhereUniqueInput
  }

  export type proyectoCreateNestedOneWithoutArchivosInput = {
    create?: XOR<proyectoCreateWithoutArchivosInput, proyectoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutArchivosInput
    connect?: proyectoWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type personaUpdateOneRequiredWithoutArchivosNestedInput = {
    create?: XOR<personaCreateWithoutArchivosInput, personaUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: personaCreateOrConnectWithoutArchivosInput
    upsert?: personaUpsertWithoutArchivosInput
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutArchivosInput, personaUpdateWithoutArchivosInput>, personaUncheckedUpdateWithoutArchivosInput>
  }

  export type proyectoUpdateOneRequiredWithoutArchivosNestedInput = {
    create?: XOR<proyectoCreateWithoutArchivosInput, proyectoUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutArchivosInput
    upsert?: proyectoUpsertWithoutArchivosInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutArchivosInput, proyectoUpdateWithoutArchivosInput>, proyectoUncheckedUpdateWithoutArchivosInput>
  }

  export type chatCreateNestedOneWithoutMensajesInput = {
    create?: XOR<chatCreateWithoutMensajesInput, chatUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: chatCreateOrConnectWithoutMensajesInput
    connect?: chatWhereUniqueInput
  }

  export type personaCreateNestedOneWithoutMensajesInput = {
    create?: XOR<personaCreateWithoutMensajesInput, personaUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: personaCreateOrConnectWithoutMensajesInput
    connect?: personaWhereUniqueInput
  }

  export type chatUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<chatCreateWithoutMensajesInput, chatUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: chatCreateOrConnectWithoutMensajesInput
    upsert?: chatUpsertWithoutMensajesInput
    connect?: chatWhereUniqueInput
    update?: XOR<XOR<chatUpdateToOneWithWhereWithoutMensajesInput, chatUpdateWithoutMensajesInput>, chatUncheckedUpdateWithoutMensajesInput>
  }

  export type personaUpdateOneRequiredWithoutMensajesNestedInput = {
    create?: XOR<personaCreateWithoutMensajesInput, personaUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: personaCreateOrConnectWithoutMensajesInput
    upsert?: personaUpsertWithoutMensajesInput
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutMensajesInput, personaUpdateWithoutMensajesInput>, personaUncheckedUpdateWithoutMensajesInput>
  }

  export type proyectoCreateNestedOneWithoutTareasInput = {
    create?: XOR<proyectoCreateWithoutTareasInput, proyectoUncheckedCreateWithoutTareasInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutTareasInput
    connect?: proyectoWhereUniqueInput
  }

  export type personaCreateNestedOneWithoutTareasInput = {
    create?: XOR<personaCreateWithoutTareasInput, personaUncheckedCreateWithoutTareasInput>
    connectOrCreate?: personaCreateOrConnectWithoutTareasInput
    connect?: personaWhereUniqueInput
  }

  export type proyectoUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<proyectoCreateWithoutTareasInput, proyectoUncheckedCreateWithoutTareasInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutTareasInput
    upsert?: proyectoUpsertWithoutTareasInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutTareasInput, proyectoUpdateWithoutTareasInput>, proyectoUncheckedUpdateWithoutTareasInput>
  }

  export type personaUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<personaCreateWithoutTareasInput, personaUncheckedCreateWithoutTareasInput>
    connectOrCreate?: personaCreateOrConnectWithoutTareasInput
    upsert?: personaUpsertWithoutTareasInput
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutTareasInput, personaUpdateWithoutTareasInput>, personaUncheckedUpdateWithoutTareasInput>
  }

  export type personaCreateNestedOneWithoutPersonalizacionesInput = {
    create?: XOR<personaCreateWithoutPersonalizacionesInput, personaUncheckedCreateWithoutPersonalizacionesInput>
    connectOrCreate?: personaCreateOrConnectWithoutPersonalizacionesInput
    connect?: personaWhereUniqueInput
  }

  export type personaUpdateOneRequiredWithoutPersonalizacionesNestedInput = {
    create?: XOR<personaCreateWithoutPersonalizacionesInput, personaUncheckedCreateWithoutPersonalizacionesInput>
    connectOrCreate?: personaCreateOrConnectWithoutPersonalizacionesInput
    upsert?: personaUpsertWithoutPersonalizacionesInput
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutPersonalizacionesInput, personaUpdateWithoutPersonalizacionesInput>, personaUncheckedUpdateWithoutPersonalizacionesInput>
  }

  export type personaCreateNestedOneWithoutProyectos_tieneInput = {
    create?: XOR<personaCreateWithoutProyectos_tieneInput, personaUncheckedCreateWithoutProyectos_tieneInput>
    connectOrCreate?: personaCreateOrConnectWithoutProyectos_tieneInput
    connect?: personaWhereUniqueInput
  }

  export type proyectoCreateNestedOneWithoutPersonas_tieneInput = {
    create?: XOR<proyectoCreateWithoutPersonas_tieneInput, proyectoUncheckedCreateWithoutPersonas_tieneInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutPersonas_tieneInput
    connect?: proyectoWhereUniqueInput
  }

  export type personaUpdateOneRequiredWithoutProyectos_tieneNestedInput = {
    create?: XOR<personaCreateWithoutProyectos_tieneInput, personaUncheckedCreateWithoutProyectos_tieneInput>
    connectOrCreate?: personaCreateOrConnectWithoutProyectos_tieneInput
    upsert?: personaUpsertWithoutProyectos_tieneInput
    connect?: personaWhereUniqueInput
    update?: XOR<XOR<personaUpdateToOneWithWhereWithoutProyectos_tieneInput, personaUpdateWithoutProyectos_tieneInput>, personaUncheckedUpdateWithoutProyectos_tieneInput>
  }

  export type proyectoUpdateOneRequiredWithoutPersonas_tieneNestedInput = {
    create?: XOR<proyectoCreateWithoutPersonas_tieneInput, proyectoUncheckedCreateWithoutPersonas_tieneInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutPersonas_tieneInput
    upsert?: proyectoUpsertWithoutPersonas_tieneInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutPersonas_tieneInput, proyectoUpdateWithoutPersonas_tieneInput>, proyectoUncheckedUpdateWithoutPersonas_tieneInput>
  }

  export type archivosCreateNestedManyWithoutProyectoInput = {
    create?: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput> | archivosCreateWithoutProyectoInput[] | archivosUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutProyectoInput | archivosCreateOrConnectWithoutProyectoInput[]
    createMany?: archivosCreateManyProyectoInputEnvelope
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
  }

  export type tareasCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type chatCreateNestedManyWithoutProyectoInput = {
    create?: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput> | chatCreateWithoutProyectoInput[] | chatUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: chatCreateOrConnectWithoutProyectoInput | chatCreateOrConnectWithoutProyectoInput[]
    createMany?: chatCreateManyProyectoInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type tieneCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput> | tieneCreateWithoutProyectoInput[] | tieneUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutProyectoInput | tieneCreateOrConnectWithoutProyectoInput[]
    createMany?: tieneCreateManyProyectoInputEnvelope
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
  }

  export type archivosUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput> | archivosCreateWithoutProyectoInput[] | archivosUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutProyectoInput | archivosCreateOrConnectWithoutProyectoInput[]
    createMany?: archivosCreateManyProyectoInputEnvelope
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
  }

  export type tareasUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
  }

  export type chatUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput> | chatCreateWithoutProyectoInput[] | chatUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: chatCreateOrConnectWithoutProyectoInput | chatCreateOrConnectWithoutProyectoInput[]
    createMany?: chatCreateManyProyectoInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type tieneUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput> | tieneCreateWithoutProyectoInput[] | tieneUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutProyectoInput | tieneCreateOrConnectWithoutProyectoInput[]
    createMany?: tieneCreateManyProyectoInputEnvelope
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
  }

  export type archivosUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput> | archivosCreateWithoutProyectoInput[] | archivosUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutProyectoInput | archivosCreateOrConnectWithoutProyectoInput[]
    upsert?: archivosUpsertWithWhereUniqueWithoutProyectoInput | archivosUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: archivosCreateManyProyectoInputEnvelope
    set?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    disconnect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    delete?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    update?: archivosUpdateWithWhereUniqueWithoutProyectoInput | archivosUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: archivosUpdateManyWithWhereWithoutProyectoInput | archivosUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: archivosScalarWhereInput | archivosScalarWhereInput[]
  }

  export type tareasUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutProyectoInput | tareasUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutProyectoInput | tareasUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutProyectoInput | tareasUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type chatUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput> | chatCreateWithoutProyectoInput[] | chatUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: chatCreateOrConnectWithoutProyectoInput | chatCreateOrConnectWithoutProyectoInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutProyectoInput | chatUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: chatCreateManyProyectoInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutProyectoInput | chatUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: chatUpdateManyWithWhereWithoutProyectoInput | chatUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type tieneUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput> | tieneCreateWithoutProyectoInput[] | tieneUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutProyectoInput | tieneCreateOrConnectWithoutProyectoInput[]
    upsert?: tieneUpsertWithWhereUniqueWithoutProyectoInput | tieneUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tieneCreateManyProyectoInputEnvelope
    set?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    disconnect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    delete?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    update?: tieneUpdateWithWhereUniqueWithoutProyectoInput | tieneUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tieneUpdateManyWithWhereWithoutProyectoInput | tieneUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tieneScalarWhereInput | tieneScalarWhereInput[]
  }

  export type archivosUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput> | archivosCreateWithoutProyectoInput[] | archivosUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: archivosCreateOrConnectWithoutProyectoInput | archivosCreateOrConnectWithoutProyectoInput[]
    upsert?: archivosUpsertWithWhereUniqueWithoutProyectoInput | archivosUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: archivosCreateManyProyectoInputEnvelope
    set?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    disconnect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    delete?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    connect?: archivosWhereUniqueInput | archivosWhereUniqueInput[]
    update?: archivosUpdateWithWhereUniqueWithoutProyectoInput | archivosUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: archivosUpdateManyWithWhereWithoutProyectoInput | archivosUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: archivosScalarWhereInput | archivosScalarWhereInput[]
  }

  export type tareasUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput> | tareasCreateWithoutProyectoInput[] | tareasUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tareasCreateOrConnectWithoutProyectoInput | tareasCreateOrConnectWithoutProyectoInput[]
    upsert?: tareasUpsertWithWhereUniqueWithoutProyectoInput | tareasUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tareasCreateManyProyectoInputEnvelope
    set?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    disconnect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    delete?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    connect?: tareasWhereUniqueInput | tareasWhereUniqueInput[]
    update?: tareasUpdateWithWhereUniqueWithoutProyectoInput | tareasUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tareasUpdateManyWithWhereWithoutProyectoInput | tareasUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tareasScalarWhereInput | tareasScalarWhereInput[]
  }

  export type chatUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput> | chatCreateWithoutProyectoInput[] | chatUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: chatCreateOrConnectWithoutProyectoInput | chatCreateOrConnectWithoutProyectoInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutProyectoInput | chatUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: chatCreateManyProyectoInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutProyectoInput | chatUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: chatUpdateManyWithWhereWithoutProyectoInput | chatUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type tieneUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput> | tieneCreateWithoutProyectoInput[] | tieneUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tieneCreateOrConnectWithoutProyectoInput | tieneCreateOrConnectWithoutProyectoInput[]
    upsert?: tieneUpsertWithWhereUniqueWithoutProyectoInput | tieneUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tieneCreateManyProyectoInputEnvelope
    set?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    disconnect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    delete?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    connect?: tieneWhereUniqueInput | tieneWhereUniqueInput[]
    update?: tieneUpdateWithWhereUniqueWithoutProyectoInput | tieneUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tieneUpdateManyWithWhereWithoutProyectoInput | tieneUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tieneScalarWhereInput | tieneScalarWhereInput[]
  }

  export type proyectoCreateNestedOneWithoutChatsInput = {
    create?: XOR<proyectoCreateWithoutChatsInput, proyectoUncheckedCreateWithoutChatsInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutChatsInput
    connect?: proyectoWhereUniqueInput
  }

  export type mensajesCreateNestedManyWithoutChatInput = {
    create?: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput> | mensajesCreateWithoutChatInput[] | mensajesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutChatInput | mensajesCreateOrConnectWithoutChatInput[]
    createMany?: mensajesCreateManyChatInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type mensajesUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput> | mensajesCreateWithoutChatInput[] | mensajesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutChatInput | mensajesCreateOrConnectWithoutChatInput[]
    createMany?: mensajesCreateManyChatInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type proyectoUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<proyectoCreateWithoutChatsInput, proyectoUncheckedCreateWithoutChatsInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutChatsInput
    upsert?: proyectoUpsertWithoutChatsInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutChatsInput, proyectoUpdateWithoutChatsInput>, proyectoUncheckedUpdateWithoutChatsInput>
  }

  export type mensajesUpdateManyWithoutChatNestedInput = {
    create?: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput> | mensajesCreateWithoutChatInput[] | mensajesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutChatInput | mensajesCreateOrConnectWithoutChatInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutChatInput | mensajesUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: mensajesCreateManyChatInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutChatInput | mensajesUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutChatInput | mensajesUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type mensajesUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput> | mensajesCreateWithoutChatInput[] | mensajesUncheckedCreateWithoutChatInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutChatInput | mensajesCreateOrConnectWithoutChatInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutChatInput | mensajesUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: mensajesCreateManyChatInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutChatInput | mensajesUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutChatInput | mensajesUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type archivosCreateWithoutPersonaInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    proyecto: proyectoCreateNestedOneWithoutArchivosInput
  }

  export type archivosUncheckedCreateWithoutPersonaInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_proyecto: number
  }

  export type archivosCreateOrConnectWithoutPersonaInput = {
    where: archivosWhereUniqueInput
    create: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput>
  }

  export type archivosCreateManyPersonaInputEnvelope = {
    data: archivosCreateManyPersonaInput | archivosCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type mensajesCreateWithoutPersonaInput = {
    mensaje: string
    estado: string
    chat: chatCreateNestedOneWithoutMensajesInput
  }

  export type mensajesUncheckedCreateWithoutPersonaInput = {
    id_chat: number
    mensaje: string
    estado: string
    id?: number
  }

  export type mensajesCreateOrConnectWithoutPersonaInput = {
    where: mensajesWhereUniqueInput
    create: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput>
  }

  export type mensajesCreateManyPersonaInputEnvelope = {
    data: mensajesCreateManyPersonaInput | mensajesCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type tareasCreateWithoutPersonaInput = {
    nombre: string
    estado: string
    limite: string
    proyecto: proyectoCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateWithoutPersonaInput = {
    nombre: string
    estado: string
    id?: number
    id_proyecto: number
    limite: string
  }

  export type tareasCreateOrConnectWithoutPersonaInput = {
    where: tareasWhereUniqueInput
    create: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput>
  }

  export type tareasCreateManyPersonaInputEnvelope = {
    data: tareasCreateManyPersonaInput | tareasCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type personalizacionesCreateWithoutPersonaInput = {
    codigo_a_insertar: string
  }

  export type personalizacionesUncheckedCreateWithoutPersonaInput = {
    id?: number
    codigo_a_insertar: string
  }

  export type personalizacionesCreateOrConnectWithoutPersonaInput = {
    where: personalizacionesWhereUniqueInput
    create: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput>
  }

  export type personalizacionesCreateManyPersonaInputEnvelope = {
    data: personalizacionesCreateManyPersonaInput | personalizacionesCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type tieneCreateWithoutPersonaInput = {
    proyecto: proyectoCreateNestedOneWithoutPersonas_tieneInput
  }

  export type tieneUncheckedCreateWithoutPersonaInput = {
    id?: number
    id_proyecto: number
  }

  export type tieneCreateOrConnectWithoutPersonaInput = {
    where: tieneWhereUniqueInput
    create: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput>
  }

  export type tieneCreateManyPersonaInputEnvelope = {
    data: tieneCreateManyPersonaInput | tieneCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type archivosUpsertWithWhereUniqueWithoutPersonaInput = {
    where: archivosWhereUniqueInput
    update: XOR<archivosUpdateWithoutPersonaInput, archivosUncheckedUpdateWithoutPersonaInput>
    create: XOR<archivosCreateWithoutPersonaInput, archivosUncheckedCreateWithoutPersonaInput>
  }

  export type archivosUpdateWithWhereUniqueWithoutPersonaInput = {
    where: archivosWhereUniqueInput
    data: XOR<archivosUpdateWithoutPersonaInput, archivosUncheckedUpdateWithoutPersonaInput>
  }

  export type archivosUpdateManyWithWhereWithoutPersonaInput = {
    where: archivosScalarWhereInput
    data: XOR<archivosUpdateManyMutationInput, archivosUncheckedUpdateManyWithoutPersonaInput>
  }

  export type archivosScalarWhereInput = {
    AND?: archivosScalarWhereInput | archivosScalarWhereInput[]
    OR?: archivosScalarWhereInput[]
    NOT?: archivosScalarWhereInput | archivosScalarWhereInput[]
    formato?: StringFilter<"archivos"> | string
    archivo?: BytesFilter<"archivos"> | Uint8Array
    nombrearchivo?: StringFilter<"archivos"> | string
    id?: IntFilter<"archivos"> | number
    id_persona?: IntFilter<"archivos"> | number
    id_proyecto?: IntFilter<"archivos"> | number
  }

  export type mensajesUpsertWithWhereUniqueWithoutPersonaInput = {
    where: mensajesWhereUniqueInput
    update: XOR<mensajesUpdateWithoutPersonaInput, mensajesUncheckedUpdateWithoutPersonaInput>
    create: XOR<mensajesCreateWithoutPersonaInput, mensajesUncheckedCreateWithoutPersonaInput>
  }

  export type mensajesUpdateWithWhereUniqueWithoutPersonaInput = {
    where: mensajesWhereUniqueInput
    data: XOR<mensajesUpdateWithoutPersonaInput, mensajesUncheckedUpdateWithoutPersonaInput>
  }

  export type mensajesUpdateManyWithWhereWithoutPersonaInput = {
    where: mensajesScalarWhereInput
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyWithoutPersonaInput>
  }

  export type mensajesScalarWhereInput = {
    AND?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    OR?: mensajesScalarWhereInput[]
    NOT?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    id_chat?: IntFilter<"mensajes"> | number
    id_persona?: IntFilter<"mensajes"> | number
    mensaje?: StringFilter<"mensajes"> | string
    estado?: StringFilter<"mensajes"> | string
    id?: IntFilter<"mensajes"> | number
  }

  export type tareasUpsertWithWhereUniqueWithoutPersonaInput = {
    where: tareasWhereUniqueInput
    update: XOR<tareasUpdateWithoutPersonaInput, tareasUncheckedUpdateWithoutPersonaInput>
    create: XOR<tareasCreateWithoutPersonaInput, tareasUncheckedCreateWithoutPersonaInput>
  }

  export type tareasUpdateWithWhereUniqueWithoutPersonaInput = {
    where: tareasWhereUniqueInput
    data: XOR<tareasUpdateWithoutPersonaInput, tareasUncheckedUpdateWithoutPersonaInput>
  }

  export type tareasUpdateManyWithWhereWithoutPersonaInput = {
    where: tareasScalarWhereInput
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyWithoutPersonaInput>
  }

  export type tareasScalarWhereInput = {
    AND?: tareasScalarWhereInput | tareasScalarWhereInput[]
    OR?: tareasScalarWhereInput[]
    NOT?: tareasScalarWhereInput | tareasScalarWhereInput[]
    nombre?: StringFilter<"tareas"> | string
    estado?: StringFilter<"tareas"> | string
    id?: IntFilter<"tareas"> | number
    id_proyecto?: IntFilter<"tareas"> | number
    id_persona?: IntFilter<"tareas"> | number
    limite?: StringFilter<"tareas"> | string
  }

  export type personalizacionesUpsertWithWhereUniqueWithoutPersonaInput = {
    where: personalizacionesWhereUniqueInput
    update: XOR<personalizacionesUpdateWithoutPersonaInput, personalizacionesUncheckedUpdateWithoutPersonaInput>
    create: XOR<personalizacionesCreateWithoutPersonaInput, personalizacionesUncheckedCreateWithoutPersonaInput>
  }

  export type personalizacionesUpdateWithWhereUniqueWithoutPersonaInput = {
    where: personalizacionesWhereUniqueInput
    data: XOR<personalizacionesUpdateWithoutPersonaInput, personalizacionesUncheckedUpdateWithoutPersonaInput>
  }

  export type personalizacionesUpdateManyWithWhereWithoutPersonaInput = {
    where: personalizacionesScalarWhereInput
    data: XOR<personalizacionesUpdateManyMutationInput, personalizacionesUncheckedUpdateManyWithoutPersonaInput>
  }

  export type personalizacionesScalarWhereInput = {
    AND?: personalizacionesScalarWhereInput | personalizacionesScalarWhereInput[]
    OR?: personalizacionesScalarWhereInput[]
    NOT?: personalizacionesScalarWhereInput | personalizacionesScalarWhereInput[]
    id?: IntFilter<"personalizaciones"> | number
    id_persona?: IntFilter<"personalizaciones"> | number
    codigo_a_insertar?: StringFilter<"personalizaciones"> | string
  }

  export type tieneUpsertWithWhereUniqueWithoutPersonaInput = {
    where: tieneWhereUniqueInput
    update: XOR<tieneUpdateWithoutPersonaInput, tieneUncheckedUpdateWithoutPersonaInput>
    create: XOR<tieneCreateWithoutPersonaInput, tieneUncheckedCreateWithoutPersonaInput>
  }

  export type tieneUpdateWithWhereUniqueWithoutPersonaInput = {
    where: tieneWhereUniqueInput
    data: XOR<tieneUpdateWithoutPersonaInput, tieneUncheckedUpdateWithoutPersonaInput>
  }

  export type tieneUpdateManyWithWhereWithoutPersonaInput = {
    where: tieneScalarWhereInput
    data: XOR<tieneUpdateManyMutationInput, tieneUncheckedUpdateManyWithoutPersonaInput>
  }

  export type tieneScalarWhereInput = {
    AND?: tieneScalarWhereInput | tieneScalarWhereInput[]
    OR?: tieneScalarWhereInput[]
    NOT?: tieneScalarWhereInput | tieneScalarWhereInput[]
    id?: IntFilter<"tiene"> | number
    id_persona?: IntFilter<"tiene"> | number
    id_proyecto?: IntFilter<"tiene"> | number
  }

  export type personaCreateWithoutArchivosInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    mensajes?: mensajesCreateNestedManyWithoutPersonaInput
    tareas?: tareasCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutArchivosInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    mensajes?: mensajesUncheckedCreateNestedManyWithoutPersonaInput
    tareas?: tareasUncheckedCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesUncheckedCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutArchivosInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutArchivosInput, personaUncheckedCreateWithoutArchivosInput>
  }

  export type proyectoCreateWithoutArchivosInput = {
    nombre: string
    limite: string
    tareas?: tareasCreateNestedManyWithoutProyectoInput
    chats?: chatCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUncheckedCreateWithoutArchivosInput = {
    id?: number
    nombre: string
    limite: string
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
    chats?: chatUncheckedCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectoCreateOrConnectWithoutArchivosInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutArchivosInput, proyectoUncheckedCreateWithoutArchivosInput>
  }

  export type personaUpsertWithoutArchivosInput = {
    update: XOR<personaUpdateWithoutArchivosInput, personaUncheckedUpdateWithoutArchivosInput>
    create: XOR<personaCreateWithoutArchivosInput, personaUncheckedCreateWithoutArchivosInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutArchivosInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutArchivosInput, personaUncheckedUpdateWithoutArchivosInput>
  }

  export type personaUpdateWithoutArchivosInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    mensajes?: mensajesUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutArchivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    mensajes?: mensajesUncheckedUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type proyectoUpsertWithoutArchivosInput = {
    update: XOR<proyectoUpdateWithoutArchivosInput, proyectoUncheckedUpdateWithoutArchivosInput>
    create: XOR<proyectoCreateWithoutArchivosInput, proyectoUncheckedCreateWithoutArchivosInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutArchivosInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutArchivosInput, proyectoUncheckedUpdateWithoutArchivosInput>
  }

  export type proyectoUpdateWithoutArchivosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
    chats?: chatUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutArchivosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
    chats?: chatUncheckedUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type chatCreateWithoutMensajesInput = {
    nombre: string
    proyecto: proyectoCreateNestedOneWithoutChatsInput
  }

  export type chatUncheckedCreateWithoutMensajesInput = {
    id?: number
    nombre: string
    id_proyecto: number
  }

  export type chatCreateOrConnectWithoutMensajesInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutMensajesInput, chatUncheckedCreateWithoutMensajesInput>
  }

  export type personaCreateWithoutMensajesInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosCreateNestedManyWithoutPersonaInput
    tareas?: tareasCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutMensajesInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosUncheckedCreateNestedManyWithoutPersonaInput
    tareas?: tareasUncheckedCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesUncheckedCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutMensajesInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutMensajesInput, personaUncheckedCreateWithoutMensajesInput>
  }

  export type chatUpsertWithoutMensajesInput = {
    update: XOR<chatUpdateWithoutMensajesInput, chatUncheckedUpdateWithoutMensajesInput>
    create: XOR<chatCreateWithoutMensajesInput, chatUncheckedCreateWithoutMensajesInput>
    where?: chatWhereInput
  }

  export type chatUpdateToOneWithWhereWithoutMensajesInput = {
    where?: chatWhereInput
    data: XOR<chatUpdateWithoutMensajesInput, chatUncheckedUpdateWithoutMensajesInput>
  }

  export type chatUpdateWithoutMensajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutChatsNestedInput
  }

  export type chatUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type personaUpsertWithoutMensajesInput = {
    update: XOR<personaUpdateWithoutMensajesInput, personaUncheckedUpdateWithoutMensajesInput>
    create: XOR<personaCreateWithoutMensajesInput, personaUncheckedCreateWithoutMensajesInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutMensajesInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutMensajesInput, personaUncheckedUpdateWithoutMensajesInput>
  }

  export type personaUpdateWithoutMensajesInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutMensajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUncheckedUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type proyectoCreateWithoutTareasInput = {
    nombre: string
    limite: string
    archivos?: archivosCreateNestedManyWithoutProyectoInput
    chats?: chatCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUncheckedCreateWithoutTareasInput = {
    id?: number
    nombre: string
    limite: string
    archivos?: archivosUncheckedCreateNestedManyWithoutProyectoInput
    chats?: chatUncheckedCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectoCreateOrConnectWithoutTareasInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutTareasInput, proyectoUncheckedCreateWithoutTareasInput>
  }

  export type personaCreateWithoutTareasInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutTareasInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosUncheckedCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesUncheckedCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesUncheckedCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutTareasInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutTareasInput, personaUncheckedCreateWithoutTareasInput>
  }

  export type proyectoUpsertWithoutTareasInput = {
    update: XOR<proyectoUpdateWithoutTareasInput, proyectoUncheckedUpdateWithoutTareasInput>
    create: XOR<proyectoCreateWithoutTareasInput, proyectoUncheckedCreateWithoutTareasInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutTareasInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutTareasInput, proyectoUncheckedUpdateWithoutTareasInput>
  }

  export type proyectoUpdateWithoutTareasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUpdateManyWithoutProyectoNestedInput
    chats?: chatUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutTareasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUncheckedUpdateManyWithoutProyectoNestedInput
    chats?: chatUncheckedUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type personaUpsertWithoutTareasInput = {
    update: XOR<personaUpdateWithoutTareasInput, personaUncheckedUpdateWithoutTareasInput>
    create: XOR<personaCreateWithoutTareasInput, personaUncheckedCreateWithoutTareasInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutTareasInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutTareasInput, personaUncheckedUpdateWithoutTareasInput>
  }

  export type personaUpdateWithoutTareasInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutTareasInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUncheckedUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUncheckedUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaCreateWithoutPersonalizacionesInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesCreateNestedManyWithoutPersonaInput
    tareas?: tareasCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutPersonalizacionesInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosUncheckedCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesUncheckedCreateNestedManyWithoutPersonaInput
    tareas?: tareasUncheckedCreateNestedManyWithoutPersonaInput
    proyectos_tiene?: tieneUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutPersonalizacionesInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutPersonalizacionesInput, personaUncheckedCreateWithoutPersonalizacionesInput>
  }

  export type personaUpsertWithoutPersonalizacionesInput = {
    update: XOR<personaUpdateWithoutPersonalizacionesInput, personaUncheckedUpdateWithoutPersonalizacionesInput>
    create: XOR<personaCreateWithoutPersonalizacionesInput, personaUncheckedCreateWithoutPersonalizacionesInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutPersonalizacionesInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutPersonalizacionesInput, personaUncheckedUpdateWithoutPersonalizacionesInput>
  }

  export type personaUpdateWithoutPersonalizacionesInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutPersonalizacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUncheckedUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUncheckedUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutPersonaNestedInput
    proyectos_tiene?: tieneUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type personaCreateWithoutProyectos_tieneInput = {
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesCreateNestedManyWithoutPersonaInput
    tareas?: tareasCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesCreateNestedManyWithoutPersonaInput
  }

  export type personaUncheckedCreateWithoutProyectos_tieneInput = {
    id?: number
    mail: string
    nombre: string
    contrasenia: string
    usuario: string
    googleRefreshToken?: string | null
    archivos?: archivosUncheckedCreateNestedManyWithoutPersonaInput
    mensajes?: mensajesUncheckedCreateNestedManyWithoutPersonaInput
    tareas?: tareasUncheckedCreateNestedManyWithoutPersonaInput
    personalizaciones?: personalizacionesUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type personaCreateOrConnectWithoutProyectos_tieneInput = {
    where: personaWhereUniqueInput
    create: XOR<personaCreateWithoutProyectos_tieneInput, personaUncheckedCreateWithoutProyectos_tieneInput>
  }

  export type proyectoCreateWithoutPersonas_tieneInput = {
    nombre: string
    limite: string
    archivos?: archivosCreateNestedManyWithoutProyectoInput
    tareas?: tareasCreateNestedManyWithoutProyectoInput
    chats?: chatCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUncheckedCreateWithoutPersonas_tieneInput = {
    id?: number
    nombre: string
    limite: string
    archivos?: archivosUncheckedCreateNestedManyWithoutProyectoInput
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
    chats?: chatUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectoCreateOrConnectWithoutPersonas_tieneInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutPersonas_tieneInput, proyectoUncheckedCreateWithoutPersonas_tieneInput>
  }

  export type personaUpsertWithoutProyectos_tieneInput = {
    update: XOR<personaUpdateWithoutProyectos_tieneInput, personaUncheckedUpdateWithoutProyectos_tieneInput>
    create: XOR<personaCreateWithoutProyectos_tieneInput, personaUncheckedCreateWithoutProyectos_tieneInput>
    where?: personaWhereInput
  }

  export type personaUpdateToOneWithWhereWithoutProyectos_tieneInput = {
    where?: personaWhereInput
    data: XOR<personaUpdateWithoutProyectos_tieneInput, personaUncheckedUpdateWithoutProyectos_tieneInput>
  }

  export type personaUpdateWithoutProyectos_tieneInput = {
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUpdateManyWithoutPersonaNestedInput
  }

  export type personaUncheckedUpdateWithoutProyectos_tieneInput = {
    id?: IntFieldUpdateOperationsInput | number
    mail?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    contrasenia?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    archivos?: archivosUncheckedUpdateManyWithoutPersonaNestedInput
    mensajes?: mensajesUncheckedUpdateManyWithoutPersonaNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutPersonaNestedInput
    personalizaciones?: personalizacionesUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type proyectoUpsertWithoutPersonas_tieneInput = {
    update: XOR<proyectoUpdateWithoutPersonas_tieneInput, proyectoUncheckedUpdateWithoutPersonas_tieneInput>
    create: XOR<proyectoCreateWithoutPersonas_tieneInput, proyectoUncheckedCreateWithoutPersonas_tieneInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutPersonas_tieneInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutPersonas_tieneInput, proyectoUncheckedUpdateWithoutPersonas_tieneInput>
  }

  export type proyectoUpdateWithoutPersonas_tieneInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
    chats?: chatUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutPersonas_tieneInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUncheckedUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
    chats?: chatUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type archivosCreateWithoutProyectoInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    persona: personaCreateNestedOneWithoutArchivosInput
  }

  export type archivosUncheckedCreateWithoutProyectoInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_persona: number
  }

  export type archivosCreateOrConnectWithoutProyectoInput = {
    where: archivosWhereUniqueInput
    create: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput>
  }

  export type archivosCreateManyProyectoInputEnvelope = {
    data: archivosCreateManyProyectoInput | archivosCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type tareasCreateWithoutProyectoInput = {
    nombre: string
    estado: string
    limite: string
    persona: personaCreateNestedOneWithoutTareasInput
  }

  export type tareasUncheckedCreateWithoutProyectoInput = {
    nombre: string
    estado: string
    id?: number
    id_persona: number
    limite: string
  }

  export type tareasCreateOrConnectWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    create: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput>
  }

  export type tareasCreateManyProyectoInputEnvelope = {
    data: tareasCreateManyProyectoInput | tareasCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type chatCreateWithoutProyectoInput = {
    nombre: string
    mensajes?: mensajesCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutProyectoInput = {
    id?: number
    nombre: string
    mensajes?: mensajesUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutProyectoInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput>
  }

  export type chatCreateManyProyectoInputEnvelope = {
    data: chatCreateManyProyectoInput | chatCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type tieneCreateWithoutProyectoInput = {
    persona: personaCreateNestedOneWithoutProyectos_tieneInput
  }

  export type tieneUncheckedCreateWithoutProyectoInput = {
    id?: number
    id_persona: number
  }

  export type tieneCreateOrConnectWithoutProyectoInput = {
    where: tieneWhereUniqueInput
    create: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput>
  }

  export type tieneCreateManyProyectoInputEnvelope = {
    data: tieneCreateManyProyectoInput | tieneCreateManyProyectoInput[]
    skipDuplicates?: boolean
  }

  export type archivosUpsertWithWhereUniqueWithoutProyectoInput = {
    where: archivosWhereUniqueInput
    update: XOR<archivosUpdateWithoutProyectoInput, archivosUncheckedUpdateWithoutProyectoInput>
    create: XOR<archivosCreateWithoutProyectoInput, archivosUncheckedCreateWithoutProyectoInput>
  }

  export type archivosUpdateWithWhereUniqueWithoutProyectoInput = {
    where: archivosWhereUniqueInput
    data: XOR<archivosUpdateWithoutProyectoInput, archivosUncheckedUpdateWithoutProyectoInput>
  }

  export type archivosUpdateManyWithWhereWithoutProyectoInput = {
    where: archivosScalarWhereInput
    data: XOR<archivosUpdateManyMutationInput, archivosUncheckedUpdateManyWithoutProyectoInput>
  }

  export type tareasUpsertWithWhereUniqueWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    update: XOR<tareasUpdateWithoutProyectoInput, tareasUncheckedUpdateWithoutProyectoInput>
    create: XOR<tareasCreateWithoutProyectoInput, tareasUncheckedCreateWithoutProyectoInput>
  }

  export type tareasUpdateWithWhereUniqueWithoutProyectoInput = {
    where: tareasWhereUniqueInput
    data: XOR<tareasUpdateWithoutProyectoInput, tareasUncheckedUpdateWithoutProyectoInput>
  }

  export type tareasUpdateManyWithWhereWithoutProyectoInput = {
    where: tareasScalarWhereInput
    data: XOR<tareasUpdateManyMutationInput, tareasUncheckedUpdateManyWithoutProyectoInput>
  }

  export type chatUpsertWithWhereUniqueWithoutProyectoInput = {
    where: chatWhereUniqueInput
    update: XOR<chatUpdateWithoutProyectoInput, chatUncheckedUpdateWithoutProyectoInput>
    create: XOR<chatCreateWithoutProyectoInput, chatUncheckedCreateWithoutProyectoInput>
  }

  export type chatUpdateWithWhereUniqueWithoutProyectoInput = {
    where: chatWhereUniqueInput
    data: XOR<chatUpdateWithoutProyectoInput, chatUncheckedUpdateWithoutProyectoInput>
  }

  export type chatUpdateManyWithWhereWithoutProyectoInput = {
    where: chatScalarWhereInput
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutProyectoInput>
  }

  export type chatScalarWhereInput = {
    AND?: chatScalarWhereInput | chatScalarWhereInput[]
    OR?: chatScalarWhereInput[]
    NOT?: chatScalarWhereInput | chatScalarWhereInput[]
    id?: IntFilter<"chat"> | number
    nombre?: StringFilter<"chat"> | string
    id_proyecto?: IntFilter<"chat"> | number
  }

  export type tieneUpsertWithWhereUniqueWithoutProyectoInput = {
    where: tieneWhereUniqueInput
    update: XOR<tieneUpdateWithoutProyectoInput, tieneUncheckedUpdateWithoutProyectoInput>
    create: XOR<tieneCreateWithoutProyectoInput, tieneUncheckedCreateWithoutProyectoInput>
  }

  export type tieneUpdateWithWhereUniqueWithoutProyectoInput = {
    where: tieneWhereUniqueInput
    data: XOR<tieneUpdateWithoutProyectoInput, tieneUncheckedUpdateWithoutProyectoInput>
  }

  export type tieneUpdateManyWithWhereWithoutProyectoInput = {
    where: tieneScalarWhereInput
    data: XOR<tieneUpdateManyMutationInput, tieneUncheckedUpdateManyWithoutProyectoInput>
  }

  export type proyectoCreateWithoutChatsInput = {
    nombre: string
    limite: string
    archivos?: archivosCreateNestedManyWithoutProyectoInput
    tareas?: tareasCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneCreateNestedManyWithoutProyectoInput
  }

  export type proyectoUncheckedCreateWithoutChatsInput = {
    id?: number
    nombre: string
    limite: string
    archivos?: archivosUncheckedCreateNestedManyWithoutProyectoInput
    tareas?: tareasUncheckedCreateNestedManyWithoutProyectoInput
    personas_tiene?: tieneUncheckedCreateNestedManyWithoutProyectoInput
  }

  export type proyectoCreateOrConnectWithoutChatsInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutChatsInput, proyectoUncheckedCreateWithoutChatsInput>
  }

  export type mensajesCreateWithoutChatInput = {
    mensaje: string
    estado: string
    persona: personaCreateNestedOneWithoutMensajesInput
  }

  export type mensajesUncheckedCreateWithoutChatInput = {
    id_persona: number
    mensaje: string
    estado: string
    id?: number
  }

  export type mensajesCreateOrConnectWithoutChatInput = {
    where: mensajesWhereUniqueInput
    create: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput>
  }

  export type mensajesCreateManyChatInputEnvelope = {
    data: mensajesCreateManyChatInput | mensajesCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type proyectoUpsertWithoutChatsInput = {
    update: XOR<proyectoUpdateWithoutChatsInput, proyectoUncheckedUpdateWithoutChatsInput>
    create: XOR<proyectoCreateWithoutChatsInput, proyectoUncheckedCreateWithoutChatsInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutChatsInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutChatsInput, proyectoUncheckedUpdateWithoutChatsInput>
  }

  export type proyectoUpdateWithoutChatsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUpdateManyWithoutProyectoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    archivos?: archivosUncheckedUpdateManyWithoutProyectoNestedInput
    tareas?: tareasUncheckedUpdateManyWithoutProyectoNestedInput
    personas_tiene?: tieneUncheckedUpdateManyWithoutProyectoNestedInput
  }

  export type mensajesUpsertWithWhereUniqueWithoutChatInput = {
    where: mensajesWhereUniqueInput
    update: XOR<mensajesUpdateWithoutChatInput, mensajesUncheckedUpdateWithoutChatInput>
    create: XOR<mensajesCreateWithoutChatInput, mensajesUncheckedCreateWithoutChatInput>
  }

  export type mensajesUpdateWithWhereUniqueWithoutChatInput = {
    where: mensajesWhereUniqueInput
    data: XOR<mensajesUpdateWithoutChatInput, mensajesUncheckedUpdateWithoutChatInput>
  }

  export type mensajesUpdateManyWithWhereWithoutChatInput = {
    where: mensajesScalarWhereInput
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyWithoutChatInput>
  }

  export type archivosCreateManyPersonaInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_proyecto: number
  }

  export type mensajesCreateManyPersonaInput = {
    id_chat: number
    mensaje: string
    estado: string
    id?: number
  }

  export type tareasCreateManyPersonaInput = {
    nombre: string
    estado: string
    id?: number
    id_proyecto: number
    limite: string
  }

  export type personalizacionesCreateManyPersonaInput = {
    id?: number
    codigo_a_insertar: string
  }

  export type tieneCreateManyPersonaInput = {
    id?: number
    id_proyecto: number
  }

  export type archivosUpdateWithoutPersonaInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutArchivosNestedInput
  }

  export type archivosUncheckedUpdateWithoutPersonaInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type archivosUncheckedUpdateManyWithoutPersonaInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesUpdateWithoutPersonaInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    chat?: chatUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type mensajesUncheckedUpdateWithoutPersonaInput = {
    id_chat?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesUncheckedUpdateManyWithoutPersonaInput = {
    id_chat?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type tareasUpdateWithoutPersonaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateWithoutPersonaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type tareasUncheckedUpdateManyWithoutPersonaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesUpdateWithoutPersonaInput = {
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesUncheckedUpdateWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type personalizacionesUncheckedUpdateManyWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_a_insertar?: StringFieldUpdateOperationsInput | string
  }

  export type tieneUpdateWithoutPersonaInput = {
    proyecto?: proyectoUpdateOneRequiredWithoutPersonas_tieneNestedInput
  }

  export type tieneUncheckedUpdateWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type tieneUncheckedUpdateManyWithoutPersonaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_proyecto?: IntFieldUpdateOperationsInput | number
  }

  export type archivosCreateManyProyectoInput = {
    formato: string
    archivo: Uint8Array
    nombrearchivo: string
    id?: number
    id_persona: number
  }

  export type tareasCreateManyProyectoInput = {
    nombre: string
    estado: string
    id?: number
    id_persona: number
    limite: string
  }

  export type chatCreateManyProyectoInput = {
    id?: number
    nombre: string
  }

  export type tieneCreateManyProyectoInput = {
    id?: number
    id_persona: number
  }

  export type archivosUpdateWithoutProyectoInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    persona?: personaUpdateOneRequiredWithoutArchivosNestedInput
  }

  export type archivosUncheckedUpdateWithoutProyectoInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
  }

  export type archivosUncheckedUpdateManyWithoutProyectoInput = {
    formato?: StringFieldUpdateOperationsInput | string
    archivo?: BytesFieldUpdateOperationsInput | Uint8Array
    nombrearchivo?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
  }

  export type tareasUpdateWithoutProyectoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    limite?: StringFieldUpdateOperationsInput | string
    persona?: personaUpdateOneRequiredWithoutTareasNestedInput
  }

  export type tareasUncheckedUpdateWithoutProyectoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type tareasUncheckedUpdateManyWithoutProyectoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
    limite?: StringFieldUpdateOperationsInput | string
  }

  export type chatUpdateWithoutProyectoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mensajes?: mensajesUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mensajes?: mensajesUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateManyWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tieneUpdateWithoutProyectoInput = {
    persona?: personaUpdateOneRequiredWithoutProyectos_tieneNestedInput
  }

  export type tieneUncheckedUpdateWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
  }

  export type tieneUncheckedUpdateManyWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_persona?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesCreateManyChatInput = {
    id_persona: number
    mensaje: string
    estado: string
    id?: number
  }

  export type mensajesUpdateWithoutChatInput = {
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    persona?: personaUpdateOneRequiredWithoutMensajesNestedInput
  }

  export type mensajesUncheckedUpdateWithoutChatInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type mensajesUncheckedUpdateManyWithoutChatInput = {
    id_persona?: IntFieldUpdateOperationsInput | number
    mensaje?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}