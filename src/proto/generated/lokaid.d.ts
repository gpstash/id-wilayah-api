import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace lokaid. */
export namespace lokaid {

    /** Properties of an AddressData. */
    interface IAddressData {

        /** AddressData code */
        code?: (string|null);

        /** AddressData value */
        value?: (string|null);
    }

    /** Represents an AddressData. */
    class AddressData implements IAddressData {

        /**
         * Constructs a new AddressData.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IAddressData);

        /** AddressData code. */
        public code: string;

        /** AddressData value. */
        public value: string;

        /**
         * Creates a new AddressData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddressData instance
         */
        public static create(properties?: lokaid.IAddressData): lokaid.AddressData;

        /**
         * Encodes the specified AddressData message. Does not implicitly {@link lokaid.AddressData.verify|verify} messages.
         * @param message AddressData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IAddressData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddressData message, length delimited. Does not implicitly {@link lokaid.AddressData.verify|verify} messages.
         * @param message AddressData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IAddressData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddressData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddressData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.AddressData;

        /**
         * Decodes an AddressData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddressData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.AddressData;

        /**
         * Verifies an AddressData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddressData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddressData
         */
        public static fromObject(object: { [k: string]: any }): lokaid.AddressData;

        /**
         * Creates a plain object from an AddressData message. Also converts values to other types if specified.
         * @param message AddressData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.AddressData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddressData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AddressData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetAllStatesRequest. */
    interface IGetAllStatesRequest {
    }

    /** Represents a GetAllStatesRequest. */
    class GetAllStatesRequest implements IGetAllStatesRequest {

        /**
         * Constructs a new GetAllStatesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetAllStatesRequest);

        /**
         * Creates a new GetAllStatesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllStatesRequest instance
         */
        public static create(properties?: lokaid.IGetAllStatesRequest): lokaid.GetAllStatesRequest;

        /**
         * Encodes the specified GetAllStatesRequest message. Does not implicitly {@link lokaid.GetAllStatesRequest.verify|verify} messages.
         * @param message GetAllStatesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetAllStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllStatesRequest message, length delimited. Does not implicitly {@link lokaid.GetAllStatesRequest.verify|verify} messages.
         * @param message GetAllStatesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetAllStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllStatesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetAllStatesRequest;

        /**
         * Decodes a GetAllStatesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetAllStatesRequest;

        /**
         * Verifies a GetAllStatesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllStatesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllStatesRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetAllStatesRequest;

        /**
         * Creates a plain object from a GetAllStatesRequest message. Also converts values to other types if specified.
         * @param message GetAllStatesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetAllStatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllStatesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAllStatesRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetAllStatesResponse. */
    interface IGetAllStatesResponse {

        /** GetAllStatesResponse states */
        states?: (lokaid.IAddressData[]|null);
    }

    /** Represents a GetAllStatesResponse. */
    class GetAllStatesResponse implements IGetAllStatesResponse {

        /**
         * Constructs a new GetAllStatesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetAllStatesResponse);

        /** GetAllStatesResponse states. */
        public states: lokaid.IAddressData[];

        /**
         * Creates a new GetAllStatesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllStatesResponse instance
         */
        public static create(properties?: lokaid.IGetAllStatesResponse): lokaid.GetAllStatesResponse;

        /**
         * Encodes the specified GetAllStatesResponse message. Does not implicitly {@link lokaid.GetAllStatesResponse.verify|verify} messages.
         * @param message GetAllStatesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetAllStatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllStatesResponse message, length delimited. Does not implicitly {@link lokaid.GetAllStatesResponse.verify|verify} messages.
         * @param message GetAllStatesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetAllStatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllStatesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetAllStatesResponse;

        /**
         * Decodes a GetAllStatesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetAllStatesResponse;

        /**
         * Verifies a GetAllStatesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllStatesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllStatesResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetAllStatesResponse;

        /**
         * Creates a plain object from a GetAllStatesResponse message. Also converts values to other types if specified.
         * @param message GetAllStatesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetAllStatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllStatesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetAllStatesResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetStateRequest. */
    interface IGetStateRequest {

        /** GetStateRequest stateCode */
        stateCode?: (string|null);
    }

    /** Represents a GetStateRequest. */
    class GetStateRequest implements IGetStateRequest {

        /**
         * Constructs a new GetStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetStateRequest);

        /** GetStateRequest stateCode. */
        public stateCode: string;

        /**
         * Creates a new GetStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStateRequest instance
         */
        public static create(properties?: lokaid.IGetStateRequest): lokaid.GetStateRequest;

        /**
         * Encodes the specified GetStateRequest message. Does not implicitly {@link lokaid.GetStateRequest.verify|verify} messages.
         * @param message GetStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStateRequest message, length delimited. Does not implicitly {@link lokaid.GetStateRequest.verify|verify} messages.
         * @param message GetStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetStateRequest;

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetStateRequest;

        /**
         * Verifies a GetStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStateRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetStateRequest;

        /**
         * Creates a plain object from a GetStateRequest message. Also converts values to other types if specified.
         * @param message GetStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetStateRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetStateResponse. */
    interface IGetStateResponse {

        /** GetStateResponse state */
        state?: (lokaid.IAddressData|null);
    }

    /** Represents a GetStateResponse. */
    class GetStateResponse implements IGetStateResponse {

        /**
         * Constructs a new GetStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetStateResponse);

        /** GetStateResponse state. */
        public state?: (lokaid.IAddressData|null);

        /**
         * Creates a new GetStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStateResponse instance
         */
        public static create(properties?: lokaid.IGetStateResponse): lokaid.GetStateResponse;

        /**
         * Encodes the specified GetStateResponse message. Does not implicitly {@link lokaid.GetStateResponse.verify|verify} messages.
         * @param message GetStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStateResponse message, length delimited. Does not implicitly {@link lokaid.GetStateResponse.verify|verify} messages.
         * @param message GetStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetStateResponse;

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetStateResponse;

        /**
         * Verifies a GetStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStateResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetStateResponse;

        /**
         * Creates a plain object from a GetStateResponse message. Also converts values to other types if specified.
         * @param message GetStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetStateResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetCitiesInStateRequest. */
    interface IGetCitiesInStateRequest {

        /** GetCitiesInStateRequest stateCode */
        stateCode?: (string|null);
    }

    /** Represents a GetCitiesInStateRequest. */
    class GetCitiesInStateRequest implements IGetCitiesInStateRequest {

        /**
         * Constructs a new GetCitiesInStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetCitiesInStateRequest);

        /** GetCitiesInStateRequest stateCode. */
        public stateCode: string;

        /**
         * Creates a new GetCitiesInStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCitiesInStateRequest instance
         */
        public static create(properties?: lokaid.IGetCitiesInStateRequest): lokaid.GetCitiesInStateRequest;

        /**
         * Encodes the specified GetCitiesInStateRequest message. Does not implicitly {@link lokaid.GetCitiesInStateRequest.verify|verify} messages.
         * @param message GetCitiesInStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetCitiesInStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCitiesInStateRequest message, length delimited. Does not implicitly {@link lokaid.GetCitiesInStateRequest.verify|verify} messages.
         * @param message GetCitiesInStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetCitiesInStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCitiesInStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCitiesInStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetCitiesInStateRequest;

        /**
         * Decodes a GetCitiesInStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCitiesInStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetCitiesInStateRequest;

        /**
         * Verifies a GetCitiesInStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCitiesInStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCitiesInStateRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetCitiesInStateRequest;

        /**
         * Creates a plain object from a GetCitiesInStateRequest message. Also converts values to other types if specified.
         * @param message GetCitiesInStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetCitiesInStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCitiesInStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetCitiesInStateRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetCitiesInStateResponse. */
    interface IGetCitiesInStateResponse {

        /** GetCitiesInStateResponse cities */
        cities?: (lokaid.IAddressData[]|null);
    }

    /** Represents a GetCitiesInStateResponse. */
    class GetCitiesInStateResponse implements IGetCitiesInStateResponse {

        /**
         * Constructs a new GetCitiesInStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetCitiesInStateResponse);

        /** GetCitiesInStateResponse cities. */
        public cities: lokaid.IAddressData[];

        /**
         * Creates a new GetCitiesInStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCitiesInStateResponse instance
         */
        public static create(properties?: lokaid.IGetCitiesInStateResponse): lokaid.GetCitiesInStateResponse;

        /**
         * Encodes the specified GetCitiesInStateResponse message. Does not implicitly {@link lokaid.GetCitiesInStateResponse.verify|verify} messages.
         * @param message GetCitiesInStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetCitiesInStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCitiesInStateResponse message, length delimited. Does not implicitly {@link lokaid.GetCitiesInStateResponse.verify|verify} messages.
         * @param message GetCitiesInStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetCitiesInStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCitiesInStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCitiesInStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetCitiesInStateResponse;

        /**
         * Decodes a GetCitiesInStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCitiesInStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetCitiesInStateResponse;

        /**
         * Verifies a GetCitiesInStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCitiesInStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCitiesInStateResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetCitiesInStateResponse;

        /**
         * Creates a plain object from a GetCitiesInStateResponse message. Also converts values to other types if specified.
         * @param message GetCitiesInStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetCitiesInStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCitiesInStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetCitiesInStateResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetCityRequest. */
    interface IGetCityRequest {

        /** GetCityRequest cityCode */
        cityCode?: (string|null);
    }

    /** Represents a GetCityRequest. */
    class GetCityRequest implements IGetCityRequest {

        /**
         * Constructs a new GetCityRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetCityRequest);

        /** GetCityRequest cityCode. */
        public cityCode: string;

        /**
         * Creates a new GetCityRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCityRequest instance
         */
        public static create(properties?: lokaid.IGetCityRequest): lokaid.GetCityRequest;

        /**
         * Encodes the specified GetCityRequest message. Does not implicitly {@link lokaid.GetCityRequest.verify|verify} messages.
         * @param message GetCityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCityRequest message, length delimited. Does not implicitly {@link lokaid.GetCityRequest.verify|verify} messages.
         * @param message GetCityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCityRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetCityRequest;

        /**
         * Decodes a GetCityRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetCityRequest;

        /**
         * Verifies a GetCityRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCityRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCityRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetCityRequest;

        /**
         * Creates a plain object from a GetCityRequest message. Also converts values to other types if specified.
         * @param message GetCityRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCityRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetCityRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetCityResponse. */
    interface IGetCityResponse {

        /** GetCityResponse city */
        city?: (lokaid.IAddressData|null);
    }

    /** Represents a GetCityResponse. */
    class GetCityResponse implements IGetCityResponse {

        /**
         * Constructs a new GetCityResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetCityResponse);

        /** GetCityResponse city. */
        public city?: (lokaid.IAddressData|null);

        /**
         * Creates a new GetCityResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCityResponse instance
         */
        public static create(properties?: lokaid.IGetCityResponse): lokaid.GetCityResponse;

        /**
         * Encodes the specified GetCityResponse message. Does not implicitly {@link lokaid.GetCityResponse.verify|verify} messages.
         * @param message GetCityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCityResponse message, length delimited. Does not implicitly {@link lokaid.GetCityResponse.verify|verify} messages.
         * @param message GetCityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCityResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetCityResponse;

        /**
         * Decodes a GetCityResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetCityResponse;

        /**
         * Verifies a GetCityResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCityResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCityResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetCityResponse;

        /**
         * Creates a plain object from a GetCityResponse message. Also converts values to other types if specified.
         * @param message GetCityResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCityResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetCityResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDistrictsInCityRequest. */
    interface IGetDistrictsInCityRequest {

        /** GetDistrictsInCityRequest cityCode */
        cityCode?: (string|null);
    }

    /** Represents a GetDistrictsInCityRequest. */
    class GetDistrictsInCityRequest implements IGetDistrictsInCityRequest {

        /**
         * Constructs a new GetDistrictsInCityRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetDistrictsInCityRequest);

        /** GetDistrictsInCityRequest cityCode. */
        public cityCode: string;

        /**
         * Creates a new GetDistrictsInCityRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDistrictsInCityRequest instance
         */
        public static create(properties?: lokaid.IGetDistrictsInCityRequest): lokaid.GetDistrictsInCityRequest;

        /**
         * Encodes the specified GetDistrictsInCityRequest message. Does not implicitly {@link lokaid.GetDistrictsInCityRequest.verify|verify} messages.
         * @param message GetDistrictsInCityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetDistrictsInCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDistrictsInCityRequest message, length delimited. Does not implicitly {@link lokaid.GetDistrictsInCityRequest.verify|verify} messages.
         * @param message GetDistrictsInCityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetDistrictsInCityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDistrictsInCityRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDistrictsInCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetDistrictsInCityRequest;

        /**
         * Decodes a GetDistrictsInCityRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDistrictsInCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetDistrictsInCityRequest;

        /**
         * Verifies a GetDistrictsInCityRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDistrictsInCityRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDistrictsInCityRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetDistrictsInCityRequest;

        /**
         * Creates a plain object from a GetDistrictsInCityRequest message. Also converts values to other types if specified.
         * @param message GetDistrictsInCityRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetDistrictsInCityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDistrictsInCityRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDistrictsInCityRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDistrictsInCityResponse. */
    interface IGetDistrictsInCityResponse {

        /** GetDistrictsInCityResponse districts */
        districts?: (lokaid.IAddressData[]|null);
    }

    /** Represents a GetDistrictsInCityResponse. */
    class GetDistrictsInCityResponse implements IGetDistrictsInCityResponse {

        /**
         * Constructs a new GetDistrictsInCityResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetDistrictsInCityResponse);

        /** GetDistrictsInCityResponse districts. */
        public districts: lokaid.IAddressData[];

        /**
         * Creates a new GetDistrictsInCityResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDistrictsInCityResponse instance
         */
        public static create(properties?: lokaid.IGetDistrictsInCityResponse): lokaid.GetDistrictsInCityResponse;

        /**
         * Encodes the specified GetDistrictsInCityResponse message. Does not implicitly {@link lokaid.GetDistrictsInCityResponse.verify|verify} messages.
         * @param message GetDistrictsInCityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetDistrictsInCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDistrictsInCityResponse message, length delimited. Does not implicitly {@link lokaid.GetDistrictsInCityResponse.verify|verify} messages.
         * @param message GetDistrictsInCityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetDistrictsInCityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDistrictsInCityResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDistrictsInCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetDistrictsInCityResponse;

        /**
         * Decodes a GetDistrictsInCityResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDistrictsInCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetDistrictsInCityResponse;

        /**
         * Verifies a GetDistrictsInCityResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDistrictsInCityResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDistrictsInCityResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetDistrictsInCityResponse;

        /**
         * Creates a plain object from a GetDistrictsInCityResponse message. Also converts values to other types if specified.
         * @param message GetDistrictsInCityResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetDistrictsInCityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDistrictsInCityResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDistrictsInCityResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDistrictRequest. */
    interface IGetDistrictRequest {

        /** GetDistrictRequest districtCode */
        districtCode?: (string|null);
    }

    /** Represents a GetDistrictRequest. */
    class GetDistrictRequest implements IGetDistrictRequest {

        /**
         * Constructs a new GetDistrictRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetDistrictRequest);

        /** GetDistrictRequest districtCode. */
        public districtCode: string;

        /**
         * Creates a new GetDistrictRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDistrictRequest instance
         */
        public static create(properties?: lokaid.IGetDistrictRequest): lokaid.GetDistrictRequest;

        /**
         * Encodes the specified GetDistrictRequest message. Does not implicitly {@link lokaid.GetDistrictRequest.verify|verify} messages.
         * @param message GetDistrictRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetDistrictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDistrictRequest message, length delimited. Does not implicitly {@link lokaid.GetDistrictRequest.verify|verify} messages.
         * @param message GetDistrictRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetDistrictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDistrictRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetDistrictRequest;

        /**
         * Decodes a GetDistrictRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetDistrictRequest;

        /**
         * Verifies a GetDistrictRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDistrictRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDistrictRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetDistrictRequest;

        /**
         * Creates a plain object from a GetDistrictRequest message. Also converts values to other types if specified.
         * @param message GetDistrictRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetDistrictRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDistrictRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDistrictRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetDistrictResponse. */
    interface IGetDistrictResponse {

        /** GetDistrictResponse district */
        district?: (lokaid.IAddressData|null);
    }

    /** Represents a GetDistrictResponse. */
    class GetDistrictResponse implements IGetDistrictResponse {

        /**
         * Constructs a new GetDistrictResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetDistrictResponse);

        /** GetDistrictResponse district. */
        public district?: (lokaid.IAddressData|null);

        /**
         * Creates a new GetDistrictResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetDistrictResponse instance
         */
        public static create(properties?: lokaid.IGetDistrictResponse): lokaid.GetDistrictResponse;

        /**
         * Encodes the specified GetDistrictResponse message. Does not implicitly {@link lokaid.GetDistrictResponse.verify|verify} messages.
         * @param message GetDistrictResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetDistrictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDistrictResponse message, length delimited. Does not implicitly {@link lokaid.GetDistrictResponse.verify|verify} messages.
         * @param message GetDistrictResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetDistrictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDistrictResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetDistrictResponse;

        /**
         * Decodes a GetDistrictResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetDistrictResponse;

        /**
         * Verifies a GetDistrictResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetDistrictResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetDistrictResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetDistrictResponse;

        /**
         * Creates a plain object from a GetDistrictResponse message. Also converts values to other types if specified.
         * @param message GetDistrictResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetDistrictResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetDistrictResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetDistrictResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetVillagesInDistrictRequest. */
    interface IGetVillagesInDistrictRequest {

        /** GetVillagesInDistrictRequest districtCode */
        districtCode?: (string|null);
    }

    /** Represents a GetVillagesInDistrictRequest. */
    class GetVillagesInDistrictRequest implements IGetVillagesInDistrictRequest {

        /**
         * Constructs a new GetVillagesInDistrictRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetVillagesInDistrictRequest);

        /** GetVillagesInDistrictRequest districtCode. */
        public districtCode: string;

        /**
         * Creates a new GetVillagesInDistrictRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVillagesInDistrictRequest instance
         */
        public static create(properties?: lokaid.IGetVillagesInDistrictRequest): lokaid.GetVillagesInDistrictRequest;

        /**
         * Encodes the specified GetVillagesInDistrictRequest message. Does not implicitly {@link lokaid.GetVillagesInDistrictRequest.verify|verify} messages.
         * @param message GetVillagesInDistrictRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetVillagesInDistrictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVillagesInDistrictRequest message, length delimited. Does not implicitly {@link lokaid.GetVillagesInDistrictRequest.verify|verify} messages.
         * @param message GetVillagesInDistrictRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetVillagesInDistrictRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVillagesInDistrictRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVillagesInDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetVillagesInDistrictRequest;

        /**
         * Decodes a GetVillagesInDistrictRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVillagesInDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetVillagesInDistrictRequest;

        /**
         * Verifies a GetVillagesInDistrictRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVillagesInDistrictRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVillagesInDistrictRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetVillagesInDistrictRequest;

        /**
         * Creates a plain object from a GetVillagesInDistrictRequest message. Also converts values to other types if specified.
         * @param message GetVillagesInDistrictRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetVillagesInDistrictRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVillagesInDistrictRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetVillagesInDistrictRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetVillagesInDistrictResponse. */
    interface IGetVillagesInDistrictResponse {

        /** GetVillagesInDistrictResponse villages */
        villages?: (lokaid.IAddressData[]|null);
    }

    /** Represents a GetVillagesInDistrictResponse. */
    class GetVillagesInDistrictResponse implements IGetVillagesInDistrictResponse {

        /**
         * Constructs a new GetVillagesInDistrictResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetVillagesInDistrictResponse);

        /** GetVillagesInDistrictResponse villages. */
        public villages: lokaid.IAddressData[];

        /**
         * Creates a new GetVillagesInDistrictResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVillagesInDistrictResponse instance
         */
        public static create(properties?: lokaid.IGetVillagesInDistrictResponse): lokaid.GetVillagesInDistrictResponse;

        /**
         * Encodes the specified GetVillagesInDistrictResponse message. Does not implicitly {@link lokaid.GetVillagesInDistrictResponse.verify|verify} messages.
         * @param message GetVillagesInDistrictResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetVillagesInDistrictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVillagesInDistrictResponse message, length delimited. Does not implicitly {@link lokaid.GetVillagesInDistrictResponse.verify|verify} messages.
         * @param message GetVillagesInDistrictResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetVillagesInDistrictResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVillagesInDistrictResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVillagesInDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetVillagesInDistrictResponse;

        /**
         * Decodes a GetVillagesInDistrictResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVillagesInDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetVillagesInDistrictResponse;

        /**
         * Verifies a GetVillagesInDistrictResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVillagesInDistrictResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVillagesInDistrictResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetVillagesInDistrictResponse;

        /**
         * Creates a plain object from a GetVillagesInDistrictResponse message. Also converts values to other types if specified.
         * @param message GetVillagesInDistrictResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetVillagesInDistrictResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVillagesInDistrictResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetVillagesInDistrictResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetVillageRequest. */
    interface IGetVillageRequest {

        /** GetVillageRequest villageCode */
        villageCode?: (string|null);
    }

    /** Represents a GetVillageRequest. */
    class GetVillageRequest implements IGetVillageRequest {

        /**
         * Constructs a new GetVillageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetVillageRequest);

        /** GetVillageRequest villageCode. */
        public villageCode: string;

        /**
         * Creates a new GetVillageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVillageRequest instance
         */
        public static create(properties?: lokaid.IGetVillageRequest): lokaid.GetVillageRequest;

        /**
         * Encodes the specified GetVillageRequest message. Does not implicitly {@link lokaid.GetVillageRequest.verify|verify} messages.
         * @param message GetVillageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetVillageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVillageRequest message, length delimited. Does not implicitly {@link lokaid.GetVillageRequest.verify|verify} messages.
         * @param message GetVillageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetVillageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVillageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVillageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetVillageRequest;

        /**
         * Decodes a GetVillageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVillageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetVillageRequest;

        /**
         * Verifies a GetVillageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVillageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVillageRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetVillageRequest;

        /**
         * Creates a plain object from a GetVillageRequest message. Also converts values to other types if specified.
         * @param message GetVillageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetVillageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVillageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetVillageRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetVillageResponse. */
    interface IGetVillageResponse {

        /** GetVillageResponse village */
        village?: (lokaid.IAddressData|null);
    }

    /** Represents a GetVillageResponse. */
    class GetVillageResponse implements IGetVillageResponse {

        /**
         * Constructs a new GetVillageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IGetVillageResponse);

        /** GetVillageResponse village. */
        public village?: (lokaid.IAddressData|null);

        /**
         * Creates a new GetVillageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVillageResponse instance
         */
        public static create(properties?: lokaid.IGetVillageResponse): lokaid.GetVillageResponse;

        /**
         * Encodes the specified GetVillageResponse message. Does not implicitly {@link lokaid.GetVillageResponse.verify|verify} messages.
         * @param message GetVillageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IGetVillageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVillageResponse message, length delimited. Does not implicitly {@link lokaid.GetVillageResponse.verify|verify} messages.
         * @param message GetVillageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IGetVillageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVillageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVillageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.GetVillageResponse;

        /**
         * Decodes a GetVillageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetVillageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.GetVillageResponse;

        /**
         * Verifies a GetVillageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVillageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVillageResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.GetVillageResponse;

        /**
         * Creates a plain object from a GetVillageResponse message. Also converts values to other types if specified.
         * @param message GetVillageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.GetVillageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVillageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetVillageResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthCheckRequest. */
    interface IHealthCheckRequest {
    }

    /** Represents a HealthCheckRequest. */
    class HealthCheckRequest implements IHealthCheckRequest {

        /**
         * Constructs a new HealthCheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IHealthCheckRequest);

        /**
         * Creates a new HealthCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheckRequest instance
         */
        public static create(properties?: lokaid.IHealthCheckRequest): lokaid.HealthCheckRequest;

        /**
         * Encodes the specified HealthCheckRequest message. Does not implicitly {@link lokaid.HealthCheckRequest.verify|verify} messages.
         * @param message HealthCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IHealthCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link lokaid.HealthCheckRequest.verify|verify} messages.
         * @param message HealthCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IHealthCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.HealthCheckRequest;

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.HealthCheckRequest;

        /**
         * Verifies a HealthCheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheckRequest
         */
        public static fromObject(object: { [k: string]: any }): lokaid.HealthCheckRequest;

        /**
         * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
         * @param message HealthCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.HealthCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthCheckRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthCheckResponse. */
    interface IHealthCheckResponse {

        /** HealthCheckResponse status */
        status?: (string|null);

        /** HealthCheckResponse version */
        version?: (string|null);

        /** HealthCheckResponse timestamp */
        timestamp?: (string|null);
    }

    /** Represents a HealthCheckResponse. */
    class HealthCheckResponse implements IHealthCheckResponse {

        /**
         * Constructs a new HealthCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IHealthCheckResponse);

        /** HealthCheckResponse status. */
        public status: string;

        /** HealthCheckResponse version. */
        public version: string;

        /** HealthCheckResponse timestamp. */
        public timestamp: string;

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheckResponse instance
         */
        public static create(properties?: lokaid.IHealthCheckResponse): lokaid.HealthCheckResponse;

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link lokaid.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link lokaid.HealthCheckResponse.verify|verify} messages.
         * @param message HealthCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IHealthCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.HealthCheckResponse;

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.HealthCheckResponse;

        /**
         * Verifies a HealthCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.HealthCheckResponse;

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @param message HealthCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.HealthCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthCheckResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ErrorResponse. */
    interface IErrorResponse {

        /** ErrorResponse error */
        error?: (string|null);

        /** ErrorResponse status */
        status?: (number|null);

        /** ErrorResponse timestamp */
        timestamp?: (string|null);

        /** ErrorResponse path */
        path?: (string|null);
    }

    /** Represents an ErrorResponse. */
    class ErrorResponse implements IErrorResponse {

        /**
         * Constructs a new ErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lokaid.IErrorResponse);

        /** ErrorResponse error. */
        public error: string;

        /** ErrorResponse status. */
        public status: number;

        /** ErrorResponse timestamp. */
        public timestamp: string;

        /** ErrorResponse path. */
        public path: string;

        /**
         * Creates a new ErrorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorResponse instance
         */
        public static create(properties?: lokaid.IErrorResponse): lokaid.ErrorResponse;

        /**
         * Encodes the specified ErrorResponse message. Does not implicitly {@link lokaid.ErrorResponse.verify|verify} messages.
         * @param message ErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lokaid.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link lokaid.ErrorResponse.verify|verify} messages.
         * @param message ErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lokaid.IErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lokaid.ErrorResponse;

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lokaid.ErrorResponse;

        /**
         * Verifies an ErrorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorResponse
         */
        public static fromObject(object: { [k: string]: any }): lokaid.ErrorResponse;

        /**
         * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
         * @param message ErrorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lokaid.ErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ErrorResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents an AddressService */
    class AddressService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AddressService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AddressService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AddressService;

        /**
         * Calls GetAllStates.
         * @param request GetAllStatesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAllStatesResponse
         */
        public getAllStates(request: lokaid.IGetAllStatesRequest, callback: lokaid.AddressService.GetAllStatesCallback): void;

        /**
         * Calls GetAllStates.
         * @param request GetAllStatesRequest message or plain object
         * @returns Promise
         */
        public getAllStates(request: lokaid.IGetAllStatesRequest): Promise<lokaid.GetAllStatesResponse>;

        /**
         * Calls GetState.
         * @param request GetStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetStateResponse
         */
        public getState(request: lokaid.IGetStateRequest, callback: lokaid.AddressService.GetStateCallback): void;

        /**
         * Calls GetState.
         * @param request GetStateRequest message or plain object
         * @returns Promise
         */
        public getState(request: lokaid.IGetStateRequest): Promise<lokaid.GetStateResponse>;

        /**
         * Calls GetCitiesInState.
         * @param request GetCitiesInStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetCitiesInStateResponse
         */
        public getCitiesInState(request: lokaid.IGetCitiesInStateRequest, callback: lokaid.AddressService.GetCitiesInStateCallback): void;

        /**
         * Calls GetCitiesInState.
         * @param request GetCitiesInStateRequest message or plain object
         * @returns Promise
         */
        public getCitiesInState(request: lokaid.IGetCitiesInStateRequest): Promise<lokaid.GetCitiesInStateResponse>;

        /**
         * Calls GetCity.
         * @param request GetCityRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetCityResponse
         */
        public getCity(request: lokaid.IGetCityRequest, callback: lokaid.AddressService.GetCityCallback): void;

        /**
         * Calls GetCity.
         * @param request GetCityRequest message or plain object
         * @returns Promise
         */
        public getCity(request: lokaid.IGetCityRequest): Promise<lokaid.GetCityResponse>;

        /**
         * Calls GetDistrictsInCity.
         * @param request GetDistrictsInCityRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetDistrictsInCityResponse
         */
        public getDistrictsInCity(request: lokaid.IGetDistrictsInCityRequest, callback: lokaid.AddressService.GetDistrictsInCityCallback): void;

        /**
         * Calls GetDistrictsInCity.
         * @param request GetDistrictsInCityRequest message or plain object
         * @returns Promise
         */
        public getDistrictsInCity(request: lokaid.IGetDistrictsInCityRequest): Promise<lokaid.GetDistrictsInCityResponse>;

        /**
         * Calls GetDistrict.
         * @param request GetDistrictRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetDistrictResponse
         */
        public getDistrict(request: lokaid.IGetDistrictRequest, callback: lokaid.AddressService.GetDistrictCallback): void;

        /**
         * Calls GetDistrict.
         * @param request GetDistrictRequest message or plain object
         * @returns Promise
         */
        public getDistrict(request: lokaid.IGetDistrictRequest): Promise<lokaid.GetDistrictResponse>;

        /**
         * Calls GetVillagesInDistrict.
         * @param request GetVillagesInDistrictRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVillagesInDistrictResponse
         */
        public getVillagesInDistrict(request: lokaid.IGetVillagesInDistrictRequest, callback: lokaid.AddressService.GetVillagesInDistrictCallback): void;

        /**
         * Calls GetVillagesInDistrict.
         * @param request GetVillagesInDistrictRequest message or plain object
         * @returns Promise
         */
        public getVillagesInDistrict(request: lokaid.IGetVillagesInDistrictRequest): Promise<lokaid.GetVillagesInDistrictResponse>;

        /**
         * Calls GetVillage.
         * @param request GetVillageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetVillageResponse
         */
        public getVillage(request: lokaid.IGetVillageRequest, callback: lokaid.AddressService.GetVillageCallback): void;

        /**
         * Calls GetVillage.
         * @param request GetVillageRequest message or plain object
         * @returns Promise
         */
        public getVillage(request: lokaid.IGetVillageRequest): Promise<lokaid.GetVillageResponse>;

        /**
         * Calls HealthCheck.
         * @param request HealthCheckRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and HealthCheckResponse
         */
        public healthCheck(request: lokaid.IHealthCheckRequest, callback: lokaid.AddressService.HealthCheckCallback): void;

        /**
         * Calls HealthCheck.
         * @param request HealthCheckRequest message or plain object
         * @returns Promise
         */
        public healthCheck(request: lokaid.IHealthCheckRequest): Promise<lokaid.HealthCheckResponse>;
    }

    namespace AddressService {

        /**
         * Callback as used by {@link lokaid.AddressService#getAllStates}.
         * @param error Error, if any
         * @param [response] GetAllStatesResponse
         */
        type GetAllStatesCallback = (error: (Error|null), response?: lokaid.GetAllStatesResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getState}.
         * @param error Error, if any
         * @param [response] GetStateResponse
         */
        type GetStateCallback = (error: (Error|null), response?: lokaid.GetStateResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getCitiesInState}.
         * @param error Error, if any
         * @param [response] GetCitiesInStateResponse
         */
        type GetCitiesInStateCallback = (error: (Error|null), response?: lokaid.GetCitiesInStateResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getCity}.
         * @param error Error, if any
         * @param [response] GetCityResponse
         */
        type GetCityCallback = (error: (Error|null), response?: lokaid.GetCityResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getDistrictsInCity}.
         * @param error Error, if any
         * @param [response] GetDistrictsInCityResponse
         */
        type GetDistrictsInCityCallback = (error: (Error|null), response?: lokaid.GetDistrictsInCityResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getDistrict}.
         * @param error Error, if any
         * @param [response] GetDistrictResponse
         */
        type GetDistrictCallback = (error: (Error|null), response?: lokaid.GetDistrictResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getVillagesInDistrict}.
         * @param error Error, if any
         * @param [response] GetVillagesInDistrictResponse
         */
        type GetVillagesInDistrictCallback = (error: (Error|null), response?: lokaid.GetVillagesInDistrictResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#getVillage}.
         * @param error Error, if any
         * @param [response] GetVillageResponse
         */
        type GetVillageCallback = (error: (Error|null), response?: lokaid.GetVillageResponse) => void;

        /**
         * Callback as used by {@link lokaid.AddressService#healthCheck}.
         * @param error Error, if any
         * @param [response] HealthCheckResponse
         */
        type HealthCheckCallback = (error: (Error|null), response?: lokaid.HealthCheckResponse) => void;
    }
}
